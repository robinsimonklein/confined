<template>
    <div class="timer">
        <h1>Confinés depuis</h1>
        <span>{{ `${spent.days} jours, ${spent.hours} heures, ${spent.minutes} min., ${spent.seconds} sec.` }}</span>
    </div>
</template>

<script>
    export default {
        name: "CountryTimer",
        props: {
            name: String,
            beginning: Number
        },
        data() {
            return {
                spent: {
                    days: null,
                    hours: null,
                    minutes: null,
                    seconds: null,
                }
            }
        },
        methods: {
            timer() {
                requestAnimationFrame(this.timer)

                const now = new Date().getTime()

                const distance = now - this.beginning

                // Time calculations for days, hours, minutes and seconds
                this.spent.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.spent.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + 1); // fix summer hour changing
                this.spent.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.spent.seconds = Math.floor((distance % (1000 * 60)) / 1000);
            }
        },
        mounted() {
            this.timer()
        }
    }
</script>

<style scoped>

</style>
