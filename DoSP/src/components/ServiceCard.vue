<script setup lang="ts">
const props = defineProps<{
    name: string;
    cost: number;
}>();
</script>

<template>
    <div class="service-item">
        <div class="absolute w-full h-fit bottom-0">
            <div class="service-item-info">
                <span>{{ name }}</span>
                <span>{{ cost }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss"></style>
