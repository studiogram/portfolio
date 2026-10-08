<?php

namespace STUDIOGRAM;

if (!defined('ABSPATH')) exit;

if (!class_exists('STUDIOGRAM\Security')) :
    class Security
    {
        public function __construct()
        {
            add_action('admin_menu', [$this, 'security_menu'], 999);

            /* Disable XML-RPC */
            add_filter('xmlrpc_enabled', '__return_false');

            /* Block REST API for non-authenticated users */
            add_filter('rest_authentication_errors', [$this, 'restrict_rest_api']);

            /* Remove user endpoints from REST API even for authenticated non-admins */
            add_filter('rest_endpoints', [$this, 'restrict_rest_endpoints']);

            /* Block author archives (user enumeration via /?author=1) */
            add_action('template_redirect', [$this, 'disable_author_archives']);

            /* Remove WP version from enqueued scripts/styles */
            add_filter('style_loader_src', [$this, 'remove_version_query'], 9999);
            add_filter('script_loader_src', [$this, 'remove_version_query'], 9999);

            /* Security headers */
            add_action('send_headers', [$this, 'add_security_headers']);

            /* Disable file editing from admin */
            if (!defined('DISALLOW_FILE_EDIT')) {
                define('DISALLOW_FILE_EDIT', true);
            }

            /* Block file modifications (updates/installs) for everyone but superadmins */
            add_action('init', [$this, 'restrict_file_mods'], 0);

            /* Limit login attempts */
            add_filter('authenticate', [$this, 'check_login_attempts'], 30, 3);
            add_action('wp_login_failed', [$this, 'log_failed_login']);
            add_action('wp_login', [$this, 'clear_failed_login'], 10, 2);

            /* Hide WP version from RSS feeds */
            add_filter('the_generator', '__return_empty_string');

            /* Disable application passwords */
            add_filter('wp_is_application_passwords_available', '__return_false');
        }

        public function restrict_file_mods()
        {
            if (defined('DISALLOW_FILE_MODS')) {
                return;
            }
            $superadmins = get_option('superadmins');
            $uid = get_current_user_id();
            $is_super = is_array($superadmins) && $uid && in_array($uid, $superadmins);
            if (!$is_super) {
                define('DISALLOW_FILE_MODS', true);
            }
        }

        public function security_menu()
        {
            if (!get_option('security_checked')) {
                add_menu_page(
                    "Sécurité",
                    'Sécurité',
                    'manage_options',
                    'studiogramsecurity',
                    [$this, 'add_security_page'],
                    'dashicons-shield-alt',
                    10
                );
            }
        }

        public function add_security_page()
        {
            if (!get_option('security_checked')) {
                $this->perform_security_update();
                add_option('security_checked', 1);
            }
            require_once STUDIOGRAM_THEME_DIR . '/includes/admin/security.php';
        }


        private function perform_security_update()
        {
            global $wpdb;
            $random_ID = rand(9, 99);
            $wpdb->query("SET SQL_MODE='ALLOW_INVALID_DATES';");
            $query = $wpdb->prepare(
                'ALTER TABLE ' . $wpdb->prefix . 'users AUTO_INCREMENT = %d;',
                $random_ID
            );
            $wpdb->query($query);
            $user_datas = wp_get_current_user()->data;
            $user_login = $user_datas->user_login;
            $user_nicename = $user_datas->user_nicename;
            $user_email = $user_datas->user_email;
            $user_datas->user_login = 'temporary';
            $user_datas->user_nicename = 'temporary';
            $user_datas->user_email = 'temporary@studio-gram.com';
            unset($user_datas->ID);
            $new_user_ID = wp_insert_user((array) $user_datas);
            if (is_wp_error($new_user_ID))  return;
            /* Delete old user */
            wp_delete_user(get_current_user_id());
            /* Update new user */
            $admin_ID = wp_update_user([
                'ID' => $new_user_ID,
                'user_email' => $user_email,
                'user_nicename' => $user_nicename,
                'role' => 'administrator',
            ]);
            $wpdb->update(
                $wpdb->users,
                [
                    'user_login' => $user_login,
                    'user_pass' => $user_datas->user_pass
                ],
                ['ID' => $new_user_ID]
            );
            /* Super admin */
            $superadmins = get_option('superadmins');
            if (is_array($superadmins) && !in_array($admin_ID, $superadmins)) $superadmins[] = $admin_ID;
            update_option('superadmins', $superadmins);
        }


        /**
         * Block REST API access for non-authenticated users.
         *
         * @param \WP_Error|null|true $result
         * @return \WP_Error|null|true
         */
        public function restrict_rest_api($result)
        {
            if (true === $result || is_wp_error($result)) {
                return $result;
            }

            if (!is_user_logged_in()) {
                return new \WP_Error(
                    'rest_not_logged_in',
                    __('REST API access restricted to authenticated users.', 'studiogram'),
                    ['status' => 401]
                );
            }

            return $result;
        }


        /**
         * Remove user-related endpoints for non-admin users.
         *
         * @param array $endpoints
         * @return array
         */
        public function restrict_rest_endpoints($endpoints)
        {
            if (!current_user_can('manage_options')) {
                unset($endpoints['/wp/v2/users']);
                unset($endpoints['/wp/v2/users/(?P<id>[\d]+)']);
                unset($endpoints['/wp/v2/users/me']);
            }

            return $endpoints;
        }


        /**
         * Redirect author archives to homepage to prevent user enumeration.
         */
        public function disable_author_archives()
        {
            if (is_author()) {
                wp_redirect(home_url(), 301);
                exit;
            }
        }


        /**
         * Strip version query string from enqueued assets.
         *
         * @param string $src
         * @return string
         */
        public function remove_version_query($src)
        {
            if (strpos($src, 'ver=')) {
                $src = remove_query_arg('ver', $src);
            }

            return $src;
        }


        /**
         * Add security headers to all responses.
         */
        public function add_security_headers()
        {
            header('X-Content-Type-Options: nosniff');
            header('X-Frame-Options: SAMEORIGIN');
            header('X-XSS-Protection: 1; mode=block');
            header('Referrer-Policy: strict-origin-when-cross-origin');
            header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
        }


        /**
         * Block login after too many failed attempts.
         *
         * @param \WP_User|\WP_Error|null $user
         * @param string $username
         * @param string $password
         * @return \WP_User|\WP_Error|null
         */
        public function check_login_attempts($user, $username, $password)
        {
            if (empty($username)) {
                return $user;
            }

            $ip = $_SERVER['REMOTE_ADDR'] ?? '';
            $transient_key = 'failed_login_' . md5($ip);
            $attempts = get_transient($transient_key);

            if ($attempts !== false && $attempts >= 5) {
                return new \WP_Error(
                    'too_many_attempts',
                    __('Too many failed login attempts. Please try again in 15 minutes.', 'studiogram')
                );
            }

            return $user;
        }


        /**
         * Log failed login attempt.
         *
         * @param string $username
         */
        public function log_failed_login($username)
        {
            $ip = $_SERVER['REMOTE_ADDR'] ?? '';
            $transient_key = 'failed_login_' . md5($ip);
            $attempts = get_transient($transient_key);

            if ($attempts === false) {
                set_transient($transient_key, 1, 15 * MINUTE_IN_SECONDS);
            } else {
                set_transient($transient_key, $attempts + 1, 15 * MINUTE_IN_SECONDS);
            }
        }


        /**
         * Clear failed login attempts on successful login.
         *
         * @param string $user_login
         * @param \WP_User $user
         */
        public function clear_failed_login($user_login, $user)
        {
            $ip = $_SERVER['REMOTE_ADDR'] ?? '';
            $transient_key = 'failed_login_' . md5($ip);
            delete_transient($transient_key);
        }
    }
endif;
