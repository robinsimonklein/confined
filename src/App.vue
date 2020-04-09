<template>
    <div id="app">
        <div class="container">
            <CountryTimer
                    v-for="(country, key) in countries"
                    :key="key"
                    :name="country.name"
                    :beginning="country.beginnig"
            />
        </div>
    </div>
</template>

<script>
    import CountryTimer from "./components/CountryTimer";
    export default {
        name: 'App',
        components: {CountryTimer},
        data() {
            return {
                countries: [
                    {
                        name: 'France',
                        tag: 'france',
                        beginnig: new Date("2020-03-17T12:00").getTime(),
                    }
                ]
            }
        },
    }
</script>

<style lang="scss">
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
        color: white;
        background: #2c3e50;
    }
</style>
