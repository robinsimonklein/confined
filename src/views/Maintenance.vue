<template>
    <div class="maintenance container">
        <img class="maintenance__icon" src="@/assets/svg/maintenance.svg" alt="maintenance" />
        <p class="maintenance__text" v-html="$t('maintenance')"></p>
    </div>
</template>

<script>
    export default {
        name: "Maintenance",
    }
</script>

<style lang="scss" scoped>
.maintenance {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    &__icon {
        width: 5rem;
        margin-bottom: 2rem;
    }
}
</style>