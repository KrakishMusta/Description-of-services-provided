// src/pages/index/+Page.js
import ServiceCard from "#/components/ServiceCard.vue";

// 1. SEO-мета
export function Head() {
    return (
        <>
            <title>Прочистка канализации в Новокузнецке — DoSP</title>
            <meta
                name="description"
                content="Аварийная прочистка канализации и КНС в Новокузнецке..."
            />
            <meta
                name="keywords"
                content="прочистка канализации, КНС Новокузнецк"
            />
            <meta
                property="og:title"
                content="Прочистка канализации в Новокузнецке — DoSP"
            />
            <meta
                property="og:image"
                content="https://bjjolk.ru/og-image.jpg"
            />
            <link rel="canonical" href="https://bjjolk.ru/" />
        </>
    );
}

// 2. Данные (как в +Page.vue)
const mockServices = [
    { name: "service_1", cost: 1000 },
    { name: "service_2", cost: 999 },
    { name: "service_3", cost: 150 },
    { name: "service_4", cost: 9999 },
    { name: "service_5", cost: 1000 },
    { name: "service_6", cost: 1000 },
];

// 3. Страница (JSX)
export default function Page() {
    return (
        <div class="grid-container">
            <header class="img-filler">...</header>
            <main class="main-container">
                <section class="services-container">
                    {mockServices.map((item, i) => (
                        <ServiceCard
                            key={i}
                            name={item.name}
                            cost={item.cost}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}
