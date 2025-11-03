<script setup>
import { useHead } from "@unhead/vue";
import ServiceCard from "./components/ServiceCard.vue";

const mockServices = [
    { name: "service_1", cost: 1000 },
    { name: "service_2", cost: 999 },
    { name: "service_3", cost: 150 },
    { name: "service_4", cost: 9999 },
    { name: "service_5", cost: 1000 },
    { name: "service_6", cost: 1000 },
];

useHead({
    title: "Прочистка канализации — DoSP",
    meta: [
        {
            name: "description",
            content: "Аварийная прочистка канализации и КНС в Новокузнецке.",
        },
        { property: "og:title", content: "Прочистка канализации — DoSP" },
        {
            property: "og:description",
            content: "Срочная прочистка труб и КНС в Новокузнецке",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://bjjolk.ru/" },
        { property: "og:image", content: "https://bjjolk.ru/og-image.jpg" },
        { property: "og:locale", content: "ru_RU" },
        { property: "og:site_name", content: "DoSP — Прочистка канализации" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Прочистка канализации — DoSP" },
        {
            name: "twitter:description",
            content:
                "Срочная прочистка канализационных сооружений, труб и КНС в Новокузнецке.",
        },
        { name: "twitter:image", content: "https://bjjolk.ru/og-image.jpg" },
    ],
    link: [
        { rel: "canonical", href: "https://bjjolk.ru/" },
        { rel: "preconnect", href: "https://bjjolk.ru", crossorigin: "" },
    ],
});
</script>

<template>
    <div class="grid-container">
        <header class="img-filler">
            <div class="overimg">
                <div class="overimg-content">
                    <div class="overimg-info">
                        <h1
                            class="max-sm:!p-0 !px-4 !py-2 bg-[rgba(19,36,64,1)] text-3xl max-sm:text-base max-sm:text-center"
                        >
                            Название организации
                        </h1>
                        <p
                            class="!px-4 !py-2 !pr-4 bg-[rgba(19,36,64,1)] text-wrap max-sm:hidden"
                        >
                            Слоган компании. Описание сферы деятельности
                            организации.
                        </p>
                    </div>
                    <address class="overimg-contacts">
                        x xxx xxx xx-xx,
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                    </address>
                </div>
            </div>
        </header>

        <main class="main-container">
            <section class="title-container">
                <h2
                    class="text-lg col-start-2 col-span-full max-sm:col-start-2 max-sm:text-base uppercase"
                >
                    Оказываемые услуги
                </h2>
            </section>

            <section class="services-container" aria-label="Список услуг">
                <ServiceCard
                    v-for="(item, index) in mockServices"
                    :key="index"
                    :name="item.name"
                    :cost="item.cost"
                />
            </section>
        </main>
    </div>
</template>
