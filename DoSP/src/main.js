import { ViteSSG } from "vite-ssg/single-page";
import { createHead } from "@unhead/vue/client";
import App from "./App.vue";

export const createApp = ViteSSG(App, ({ app }) => {
    const head = createHead();
    app.use(head);
});
