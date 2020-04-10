<template>
    <div class="zone" :id="name">
        <h3 class="zone__name">{{ $t('zones.'+name) }}</h3>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Zone",
        props: {
            name: String
        }
    }
</script>

<style lang="scss" scoped>
    .zone {
        &__name {
            font-size: 2rem;
            text-transform: uppercase;
            border-bottom: 2px solid #f95850;
            display: inline-block;
        }
    }
</style>
