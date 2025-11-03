import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
    base: "./",
    plugins: [
        vue(),
        vueDevTools(),
        tailwindcss(),
        viteStaticCopy({
            targets: [
                { src: "robots.txt", dest: "" },
                { src: "sitemap.xml", dest: "" },
            ],
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
