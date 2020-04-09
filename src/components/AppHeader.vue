<template>
    <header class="header">
        <LanguageSwitcher />
    </header>
</template>

<script>
    import LanguageSwitcher from "./LanguageSwitcher.vue";
    export default {
        name: "AppHeader",
        components: {LanguageSwitcher}
    }
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        padding: 1rem;
    }
</style>
