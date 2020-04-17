<template>
    <div id="app">
        <AppHeader />
        <main>
            <router-view/>
            <ScrollToTop />
        </main>
        <AppFooter />
    </div>
</template>

<script>
    import AppFooter from "./components/AppFooter";
    import AppHeader from "./components/AppHeader";
    import ScrollToTop from "./components/ScrollToTop";

    export default {
        components: {ScrollToTop, AppHeader, AppFooter},
    }
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        background: #011627;
    }

    #app {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #FDFFFC;
    }

    main {
        position: relative;
        flex: 1;
        width: 100%;
        padding: 0 1rem;
    }

</style>
