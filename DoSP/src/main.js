import { ViteSSG } from "vite-ssg/single-page";
import { createHead } from "@unhead/vue/client";
import App from "./App.vue";
import "./styles/main.css";

export const createApp = ViteSSG(App, ({ app }) => {
    const head = createHead();
    app.use(head);
});
