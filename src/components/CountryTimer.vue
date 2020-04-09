<template>
    <div class="timer">
        <span class="timer__country">
            <img class="timer__flag" :src="require(`@/assets/flags/${flag}.svg`)" />
            {{ text.in_country }}
        </span>
        <p class="timer__text">{{ text.since }}</p>
        <span v-if="largeScreen" class="timer__count">{{ `${spent.days} jours, ${spent.hours} heures, ${spent.minutes} min., ${spent.seconds} sec.` }}</span>
        <span v-else class="timer__count">
            {{ `${spent.days} jours` }}<br>
            {{ `${spent.hours}h ${spent.minutes}m ${spent.seconds}s` }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "CountryTimer",
        props: {
            name: String,
            flag: String,
            text: Object,
            beginning: Number,
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
        computed: {
            flagPath() {
                return ``
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

<style lang="scss" scoped>
.timer {
    margin: 5rem 0;

    &__country {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2.5rem;
    }

    &__flag {
        height: 2rem;
        margin-right: 1rem;
    }

    &__text {
        font-size: 1.5rem;
        margin: .5rem 0;
    }

    &__count {
        color: #f95850;
        font-size: 2rem;
        font-weight: bold;
    }
}
</style>
