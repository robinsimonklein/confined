<template>
    <div :ref="flag" class="timer col-xs-12 col-sm-10 col-lg-6" :class="[{'easing' : easing}, {'ended' : end}]">
        <div class="timer__wrap">
            <img class="timer__flag" :src="require(`@/assets/flags/${flag}.svg`)" :alt="flag" importance="low"/>
            <span class="timer__country">
                {{ $t('countries.'+flag) }}
            </span>
            <p v-if="message" class="timer__message">{{ $t(message) }}</p>
            <template v-if="end">
                <p class="timer__total">{{ $t('total') }} :</p>
                <span class="timer__day">{{ spent.days }} {{ $t('date.days') }} </span>
                <p class="timer__duration">{{ $d(new Date(beginning.date), 'short') }} → {{ $d(new Date(end.date), 'short') }}</p>
                <p>{{ $t('confinement_end_text') }} <strong>{{ $d(new Date(end.date), 'medium') }}.</strong></p>
                <a class="timer__source-link" v-if="source" :href="source" target="_blank" rel="noreferrer">{{ $t('source') }}</a>
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
                    ({{ $d(beginningDateTZ, beginning.time !== "00:00" ? 'long' : 'short') }})
                    {{ source ? ' • ' : '' }}
                    <a class="timer__source-link" v-if="source" :href="source" target="_blank">{{ $t('source') }}</a>
                </span>
                <div v-if="estimatedEnd && displayEstimated" class="timer__estimated">
                    <hr>
                    <span class="timer__estimated--top">{{ $t('confinement_estimated')}} :</span>
                    <span class="timer__estimated--date">{{ $d(new Date(estimatedEnd.date), 'short') }}</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import moment from 'moment-timezone'

    export default {
        name: "CountryTimer",
        props: {
            flag: String,
            beginning: Object,
            estimatedEnd: {
                type: Object,
                default: null
            },
            end: {
                type: Object,
                default: null
            },
            easing: {
                type: Boolean,
                default: false
            },
            timezone: {
                type: String,
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
            }
        },
        methods: {
            getSpent() {
                let beginning, end, now;

                // set beginning
                // this.timezone ? beginning = moment.tz(this.beginning.date + 'T' + this.beginning.time, this.timezone) : beginning = moment(this.beginning.date+'T00:00Z').tz(moment.tz.guess())
                 beginning = moment(this.beginning.date+'T'+this.beginning.time)
                // set end
                end = this.end !== null ? moment(this.end.date) : moment().tz(moment.tz.guess())
                // set now
                now = moment()
                const offset = now.utcOffset()

                let duration = moment.duration(end.diff(beginning.tz(moment.tz.guess())))

                // duration.add(offset, 'minutes')

                // manage DST
                if(now.isDST && !beginning.isDST()){
                    duration.add(1, 'hours')
                }
                if(!now.isDST && beginning.isDST()){
                    duration.remove(1, 'hours')
                }

                // Time calculations for days, hours, minutes and seconds
                this.spent.days = Math.floor(duration.asDays())
                this.spent.hours = duration.hours()
                this.spent.minutes = duration.minutes()
                this.spent.seconds = duration.seconds()


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
            beginningDateTZ() {

                let date;
                if(this.timezone){
                    date = moment.tz(this.beginning.date+'T'+this.beginning.time, this.timezone)
                }else {
                    date = moment(this.beginning.date+'T'+this.beginning.time+'Z')
                }
                return date.tz(moment.tz.guess()).toDate()
            },
            displayEstimated(){
                return this.estimatedEnd ? moment().isBefore(this.estimatedEnd.date) : false
            },
        },
        mounted() {
            if(this.end){
                this.getSpent()
            }else{
                this.timer()
            }

            if(this.$route.query.c === this.flag){
                this.$scrollTo(this.$refs[this.flag])
            }


            this.resize()
            window.addEventListener('resize', this.resize)
        }
    }
</script>

<style lang="scss" scoped>
    hr {
        width: 10%;
        opacity: .2;
        border: none;
        background: white;
        height: 2px;
        margin: 1.2rem auto
    }

.timer {
    margin: 4rem 0;

    @media screen and (max-width: 548px) {
        margin: 1.5rem 0;
    }

    &__wrap {
        display: inline-flex;
        flex-direction: column;
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

    &__total {
        text-transform: capitalize;
    }

    &__text {
        font-size: 1.3rem;
        margin: .4rem 0;
    }

    &__day {
        color: $color-text;
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        text-transform: uppercase;

        .ended & {
            color: $color-success;
        }
    }

    &__duration {
        margin-top: 0;
        font-weight: bold;
        color: $color-success;
    }

    &__count {
        color: $color-danger;
        font-size: 2rem;
        font-weight: bold;

        .easing &{
            color: $color-easing
        }
    }

    &__date {
        margin-top: .8rem;
        opacity: .6;
        font-size: .9rem;
    }

    &__estimated {
        display: flex;
        flex-direction: column;

        &--top {
            font-weight: bold;
            margin-bottom: .2rem;
        }

        &--date {
            color: #7fcd91;
        }
    }
}
</style>
