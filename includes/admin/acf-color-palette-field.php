<?php
if (!defined('ABSPATH')) exit;

/**
 * Template for ACF Color Palette field input
 *
 * @var array  $palette    Color palette from theme.json
 * @var string $value      Current field value (slug)
 * @var bool   $allow_null Whether null is allowed
 * @var string $name       Field name attribute
 * @var string $id         Field id attribute
 */
?>
<div class="acf-cpf-palette" id="<?php echo $id; ?>" role="radiogroup">

    <?php if ($allow_null) : ?>
        <label class="acf-cpf-circle-wrap <?php echo '' === $value ? 'is-selected' : ''; ?>"
            title="<?php esc_attr_e('None', 'studiogram'); ?>">
            <input type="radio" name="<?php echo $name; ?>" value=""
                <?php checked('', $value); ?> class="acf-cpf-radio" />
            <span class="acf-cpf-circle acf-cpf-circle--none">
                <svg viewBox="0 0 24 24">
                    <line x1="3" y1="3" x2="21" y2="21" />
                </svg>
            </span>
        </label>
    <?php endif; ?>

    <?php foreach ($palette as $color) :
        $slug     = esc_attr($color['slug']);
        $hex      = esc_attr($color['color']);
        $label    = esc_html($color['name']);
        $selected = ($value === $color['slug']);
    ?>
        <label class="acf-cpf-circle-wrap <?php echo $selected ? 'is-selected' : ''; ?>"
            title="<?php echo $label; ?>">
            <input type="radio" name="<?php echo $name; ?>" value="<?php echo $slug; ?>"
                <?php checked($value, $color['slug']); ?> class="acf-cpf-radio" />
            <span class="acf-cpf-circle" style="--c:<?php echo $hex; ?>"></span>
        </label>
    <?php endforeach; ?>

</div>
