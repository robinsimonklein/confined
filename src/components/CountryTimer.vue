<template>
    <div class="timer">
        <div class="timer__wrap">
            <img class="timer__flag" :src="require(`@/assets/flags/${flag}.svg`)" />
            <span class="timer__country">
                {{ text.in_country }}
            </span>
            <span class="timer__day">J. {{ day }}</span>
            <p class="timer__text">{{ text.since }}</p>
            <span v-if="largeScreen" class="timer__count">{{ `${spent.days} ${text.days}, ${spent.hours} ${text.hours}, ${spent.minutes} ${text.min}, ${spent.seconds} ${text.sec}` }}</span>
            <span v-else class="timer__count">
                {{ `${spent.days} jours` }}<br>
                {{ `${spent.hours}h ${spent.minutes}m ${spent.seconds}s` }}
            </span>
            <span class="timer__date">({{ beginningDateString }})</span>
        </div>
    </div>
</template>

<script>
    import dayjs from 'dayjs'

    export default {
        name: "CountryTimer",
        props: {
            name: String,
            flag: String,
            text: Object,
            beginning: Object,
        },
        data() {
            return {
                day: 0,
                spent: {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                },
                largeScreen: true,
                summer: new Date("2020-03-31").getTime()
            }
        },
        methods: {
            getSpent() {
                const now = new Date().getTime()
                const beginning = new Date(this.beginning.date+'T'+this.beginning.time)

                let distance = now - beginning

                if(beginning < this.summer){
                    distance += 3600000
                }

                // Time calculations for days, hours, minutes and seconds
                this.spent.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.spent.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // fix summer hour changing
                this.spent.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.spent.seconds = Math.floor((distance % (1000 * 60)) / 1000);
            },
            getDay() {
                const now = new Date().getTime()
                const beginning = new Date(this.beginning.date)

                let distance = now - beginning
                this.day = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;

            },
            timer() {
                requestAnimationFrame(this.timer)

                this.getSpent()
                this.getDay()
            },
            resize() {
                this.largeScreen = window.innerWidth >= 700
            }
        },
        computed: {
            beginningDateString() {
                return dayjs(this.beginning.date+'T'+this.beginning.time).format(`D/MM/YYYY${this.beginning.time !== '00:00' ? ' - h:mm' : ''}`)
            }
        },
        mounted() {
            this.timer()

            this.resize()
            window.addEventListener('resize', this.resize)
        }
    }
</script>

<style lang="scss" scoped>
.timer {
    margin: 7rem 0;

    @media screen and (max-width: 548px) {
        margin: 2rem 0;
    }

    &__wrap {
        display: inline-flex;
        flex-direction: column;
        padding: 2rem 2rem;
        background: #001b31;

        @media screen and (max-width: 548px) {
            width: 100%;
        }
    }

    &__country {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        font-weight: bold;
    }

    &__flag {
        height: 2.5rem;
        margin-bottom: .3rem;
    }

    &__text {
        font-size: 1.3rem;
        margin: .4rem 0;
    }

    &__day {
        color: white;
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    &__count {
        color: #f95850;
        font-size: 2rem;
        font-weight: bold;
    }

    &__date {
        margin-top: .8rem;
        opacity: .6;
        font-size: .9rem;
    }
}
</style>
