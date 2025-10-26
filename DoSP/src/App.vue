<script setup>
import ServiceCard from "./components/ServiceCard.vue";

const mockServices = [
    {
        name: "service_1",
        cost: 1000,
    },
    {
        name: "service_2",
        cost: 999,
    },
    {
        name: "service_3",
        cost: 150,
    },
    {
        name: "service_4",
        cost: 9999,
    },
    {
        name: "service_5",
        cost: 1000,
    },
    {
        name: "service_6",
        cost: 1000,
    },
];
</script>

<template>
    <div class="grid-container">
        <div class="img-filler">
            <div class="overimg">
                <div class="overimg-content">
                    <div class="overimg-info">
                        <span
                            class="max-sm:!p-0 !px-4 !py-2 bg-[rgba(19,36,64,1)] text-3xl max-sm:text-base max-sm:text-center"
                        >
                            Название организации
                        </span>
                        <span
                            class="!px-4 !py-2 !pr-4 bg-[rgba(19,36,64,1)] text-wrap max-sm:hidden"
                        >
                            Слоган компании. Описание сферы деятельности
                            организации.
                        </span>
                    </div>
                    <div class="overimg-contacts">
                        x xxx xxx xx-xx, exapmle@gmail.com
                    </div>
                </div>
            </div>
        </div>
        <div class="main-container">
            <div class="title-container">
                <span
                    class="text-lg col-start-2 col-span-full max-sm:col-start-2 max-sm:text-base uppercase"
                    >Оказываемые услуги</span
                >
            </div>
            <div class="services-container">
                <ServiceCard
                    v-for="(item, index) in mockServices"
                    :key="index"
                    :name="item.name"
                    :cost="item.cost"
                />
            </div>
            <!-- <ServiceCard class="col-start-3" />
            <ServiceCard />
            <ServiceCard /> -->
        </div>
    </div>
</template>

<style></style>
