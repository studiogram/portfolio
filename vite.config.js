import { defineConfig } from "vite";
import { readdirSync, existsSync, rmSync } from "fs";

const blockEntries = Object.fromEntries(
    readdirSync("blocks", { withFileTypes: true })
        .filter((d) => d.isDirectory() && existsSync(`blocks/${d.name}/scripts.js`))
        .map((d) => [`blocks/${d.name}/scripts`, `blocks/${d.name}/scripts.js`]),
);

const purgeChunks = () => ({
    name: "purge-chunks",
    buildStart() {
        rmSync("dist/js/chunks", { recursive: true, force: true });
    },
});

export default defineConfig({
    base: "./",
    plugins: [purgeChunks()],
    build: {
        outDir: "dist",
        emptyOutDir: false,
        copyPublicDir: false,
        sourcemap: false,
        rollupOptions: {
            input: {
                "js/main": "assets/js/main.js",
                "js/editor": "assets/js/editor.js",
                "js/admin": "assets/js/admin.js",
                ...blockEntries,
            },
            output: {
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name.startsWith("blocks/")) {
                        return `${chunkInfo.name}.min.js`;
                    }
                    if (chunkInfo.name === "js/main") {
                        return "js/main.min.js";
                    }
                    return `${chunkInfo.name}.js`;
                },
                chunkFileNames: "js/chunks/[name].[hash].js",
                assetFileNames: (assetInfo) => {
                    const originalFile =
                        assetInfo.originalFileNames?.[0] || "";
                    const name =
                        assetInfo.names?.[0] || assetInfo.name || "";

                    if (name.endsWith(".css")) {
                        const blockMatch = originalFile.match(
                            /^blocks\/([^/]+)\/scripts\.js$/,
                        );
                        if (blockMatch) {
                            return `blocks/${blockMatch[1]}/styles.min.css`;
                        }
                        if (originalFile === "assets/js/main.js" || name === "main.css") {
                            return "css/main.min.css";
                        }
                        if (originalFile === "assets/js/editor.js" || name === "editor.css") {
                            return "css/editor.css";
                        }
                        if (originalFile === "assets/js/admin.js" || name === "admin.css") {
                            return "css/admin.css";
                        }
                    }
                    if (/\.(otf|woff2?|ttf|eot)$/i.test(name)) {
                        return "fonts/[name][extname]";
                    }
                    return "assets/[name].[hash][extname]";
                },
                format: "es",
            },
        },
        cssCodeSplit: true,
        minify: "esbuild",
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
                loadPaths: ["assets/css/commons"],
            },
        },
    },
});
