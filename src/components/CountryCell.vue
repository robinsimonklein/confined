<template>
    <div class="country-cell__wrap col col-xs-4 col-sm-2" :class="[{'easing' : easing}, {'ended' : end}]">
        <div :id="flag" class="country-cell" @click="select">
            <img class="country-cell__flag" :src="require(`@/assets/flags/${flag}.svg`)" :alt="flag" importance="low"/>
            <span class="country-cell__country">
                {{ $t('countries.'+flag) }}
            </span>
            <template v-if="end">
                <span v-if="end" class="country-cell__day">{{ spent.days }}</span>
                <span class="country-cell__day--text">{{ $t('date.days')}}</span>
            </template>
            <template v-else>
                <span class="country-cell__day--text">{{ $t('date.day')}}</span>
                <span class="country-cell__day">{{ day }}</span>
            </template>
        </div>
    </div>
</template>

<script>
    import moment from "moment-timezone";
    import layoutModes from "../js/layoutModes";

    export default {
        name: "CountryCell",
        props: {
            flag: String,
            beginning: Object,
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
                },
            }
        },
        methods: {
            getDay() {
                const now = new Date().getTime()
                const beginning = new Date(this.beginning.date)

                let distance = now - beginning
                this.day = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
            },
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
            },
            select(){
                this.$emit('select')
            }
        },
        beforeMount() {
            if(this.end){
                this.getSpent()
            }else{
                this.getDay()
            }
        },
    }
</script>

<style lang="scss" scoped>
.country-cell {
    display: flex;
    flex-direction: column;
    padding: .8rem;
    background: #001b31;
    height: 100%;
    flex: 1;
    cursor: pointer;
    border: 1px solid $color-dark-alternate;
    transition: all .2s ease;

    .ended & {
        background: $color-success-dark;
    }

    @media screen and (max-width: 548px) {
        padding: .8rem .2rem
    }

    &:hover {
        transition: all .2s ease;
        border: 1px solid rgba($color-primary, .3);


        .ended & {
            border: 1px solid rgba($color-success, .3);
        }
    }

    &__wrap {
        margin-bottom: 1rem;
    }

    &__flag {
        height: 2.5rem;
        margin-bottom: .4rem;

        @media screen and (max-width: 548px) {
            height: 2.2rem;
        }
    }

    &__country {
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre;
        margin-bottom: 1rem;

        @media screen and (max-width: 548px) {
            font-size: .8rem;
        }
    }

    &__day {
        font-weight: bold;
        font-size: 2.5rem;
        color: $color-danger;


        @media screen and (max-width: 548px) {
            font-size: 2rem;
        }

        &--text {
            color: white;
            text-transform: capitalize;
        }

        .easing & {
            color: $color-easing;
        }
        .ended & {
            color: $color-success;
        }
    }
}
</style>
