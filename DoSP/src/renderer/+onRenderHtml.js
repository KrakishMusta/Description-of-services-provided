// src/renderer/+onRenderHtml.js
import { renderToString } from "vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { createSSRApp } from "vue";

export async function onRenderHtml(pageContext) {
    const { Page } = pageContext;
    if (!Page) return;

    // Создаём Vue приложение
    const app = createSSRApp(Page);
    const appHtml = await renderToString(app);

    // Head HTML (из +Page.server.js)
    const headHtml = pageContext._headHtml || "";

    return escapeInject`<!DOCTYPE html>
    <html lang="ru">
      <head>
        ${dangerouslySkipEscape(headHtml)}
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
