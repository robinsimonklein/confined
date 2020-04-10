<template>
    <div class="timer" :class="{'ended' : end}">
        <div class="timer__wrap">
            <img class="timer__flag" :src="require(`@/assets/flags/${flag}.svg`)" />
            <span class="timer__country">
                {{ $t('countries.'+flag) }}
            </span>
            <p v-if="message" class="timer__message">{{ $t(message) }}</p>
            <template v-if="end">
                <span class="timer__day">{{ spent.days }} {{ $t('date.days') }} </span>
                <p>{{ $t('confinement_end_text') }} <strong>{{ $d(new Date(end.date), 'medium') }}.</strong></p>
                <a class="timer__source-link" v-if="source" :href="source" target="_blank">{{ $t('source') }}</a>
            </template>
            <template v-else>
                <span class="timer__day">{{ $t('date.day') }} {{ day }}</span>
                <p class="timer__text">{{ $t('confined_since') }}</p>
                <span v-if="largeScreen" class="timer__count">{{ `${spent.days} ${$t('date.days')}, ${spent.hours} ${$t('date.hours')}, ${spent.minutes} ${$t('date.min')}, ${spent.seconds} ${$t('date.sec')}` }}</span>
                <span v-else class="timer__count">
                    {{ `${spent.days} ${$t('date.days')}` }}<br>
                    {{ `${spent.hours}${$t('date.hours_letter')} ${spent.minutes}${$t('date.min_letter')} ${spent.seconds}${$t('date.sec_letter')}` }}
                </span>
                <span class="timer__date">
                    ({{ $d(new  Date(beginning.date+'T'+beginning.time), beginning.time !== "00:00" ? 'long' : 'short') }})
                    {{ source ? ' • ' : '' }}
                    <a class="timer__source-link" v-if="source" :href="source" target="_blank">{{ $t('source') }}</a>
                </span>
            </template>
        </div>
    </div>
</template>

<script>
    import dayjs from 'dayjs'

    export default {
        name: "CountryTimer",
        props: {
            flag: String,
            beginning: Object,
            end: {
                type: Object,
                default: null
            },
            source: String,
            message: {
                type: String,
                default: null
            },
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
                const end = this.end !== null ? new Date(this.end.date).getTime() : new Date().getTime()
                const beginning = new Date(this.beginning.date+'T'+this.beginning.time)

                let distance = end - beginning

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
            if(this.end){
                this.getSpent()
            }else{
                this.timer()
            }

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
        max-width: 38rem;
        width: 100%;
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
        margin-bottom: 1.5rem;
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
        text-transform: uppercase;

        .ended & {
            color: #7fcd91;
        }
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
