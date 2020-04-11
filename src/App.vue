<template>
    <div id="app">
        <AppHeader />
        <main>
            <router-view/>
        </main>
        <AppFooter />
    </div>
</template>

<script>
    import AppFooter from "./components/AppFooter";
    import AppHeader from "./components/AppHeader";

    export default {
        components: {AppHeader, AppFooter},
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap');

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
        flex: 1;
        width: 100%;
        padding: 0 1rem;
    }

    a {
        color: white;
    }
</style>
