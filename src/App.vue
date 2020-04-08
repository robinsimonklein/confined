<template>
    <div id="app">
        <h1>Confinés depuis</h1>
        <span>{{ `${days} jours, ${hours} heures, ${minutes} min., ${seconds} sec.` }}</span>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                beginnig: new Date("2020-03-17T12:00").getTime(),
                days: null,
                hours: null,
                minutes: null,
                seconds: null,
            }
        },
        methods: {
            franceSpent() {

                requestAnimationFrame(this.franceSpent)

                const now = new Date().getTime()

                const distance = now - this.beginnig

                // Time calculations for days, hours, minutes and seconds
                this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + 1); // fix summer hour changing
                this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
            }
        },
        mounted() {
            this.franceSpent()
        }
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
        height: 100vh;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: white;
        background: #2c3e50;
    }
</style>
