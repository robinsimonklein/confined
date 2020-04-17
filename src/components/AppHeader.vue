<template>
    <header class="header">
        <LayoutSwitcher />
        <LanguageSwitcher />
    </header>
</template>

<script>
    import LanguageSwitcher from "./LanguageSwitcher.vue";
    import LayoutSwitcher from "./LayoutSwitcher";
    export default {
        name: "AppHeader",
        components: {LayoutSwitcher, LanguageSwitcher}
    }
</script>

<style lang="scss" scoped>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1rem;
        background: linear-gradient(180deg, rgba(#011627,1) 10%, rgba(#011627,0) 100%);
    }
</style>
