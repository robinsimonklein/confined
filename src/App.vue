<template>
    <div id="app">
        <main>
            <router-view/>
        </main>
        <AppFooter />
    </div>
</template>

<style lang="scss">
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
    }

    #app {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #FDFFFC;
        background: #011627;
    }

    main {
        flex: 1;
        width: 100%;
        padding: 0 1rem;

        @media screen and (max-width: 548px){
            padding: 0 .2rem;
        }
    }
</style>

<script>
    import AppFooter from "./components/AppFooter";
    export default {
        components: {AppFooter}
    }
</script>
