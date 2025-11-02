<script setup lang="ts">
const props = defineProps<{
    name: string;
    cost: number;
}>();
</script>

<template>
    <article class="service-item">
        <div class="absolute w-full h-fit bottom-0">
            <div class="service-item-info">
                <h3>{{ name }}</h3>
                <p>Стоимость: {{ cost }} ₽</p>
            </div>
        </div>
    </article>
</template>

<style scoped lang="postcss"></style>
