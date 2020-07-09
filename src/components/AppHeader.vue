<template>
    <header class="header">
        <!--
        <div class="header__switchers">
            <LayoutSwitcher class="header__layout-switcher"/>
            <SortSwitcher />
        </div>
        -->
        <LanguageSwitcher class="header__language" />
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
    .header {
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

        &__switchers {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        &__layout-switcher {
            margin-right: 1.4rem;
        }

        &__language {
            margin-left: auto;
        }
    }
</style>
