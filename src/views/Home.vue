<template>
    <div class="home">
        <div class="home__intro">
            <div class="home__intro--img">
                <img src="@/assets/svg/coronavirus.svg" />
            </div>
            <div class="home__intro--text">
                <h1 class="home__intro--title" v-html="$t('intro.title')"></h1>
                <h2 class="home__intro--subtitle">{{ $t('intro.subtitle') }}</h2>
                <p v-html="$t('intro.text')"></p>
                <p><strong>#StayAtHome</strong></p>
            </div>
        </div>
        <template
                v-for="(country, index, key) in countries"
        >
            <CountryTimer
                    :key="key"
                    :flag="country.flag"
                    :beginning="country.beginning"
            />
            <hr :key="key" v-if="index < countries.length - 1" />

        </template>

        <p>{{ $t('last_update') }} : {{ lastUpdate.format("DD/MM/YYYY") }}</p>
    </div>
</template>

<script>
    // @ is an alias to /src

    import CountryTimer from "../components/CountryTimer";
    import dayjs from 'dayjs'

    export default {
        name: 'Home',
        components: {
            CountryTimer
        },
        data() {
            return {
                lastUpdate: dayjs('2020-04-09'),
                countries: [
                    {
                        flag: 'france',
                        beginning: {
                            date: "2020-03-17",
                            time: "12:00"
                        },
                    },
                    {
                        flag: 'italy',
                        beginning: {
                            date: "2020-03-09",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'germany',
                        beginning: {
                            date: "2020-03-22",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'spain',
                        beginning: {
                            date: "2020-03-15",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'belgium',
                        beginning: {
                            date: "2020-03-18",
                            time: "12:00"
                        },
                    },
                    {
                        flag: 'united_kingdom',
                        beginning: {
                            date: "2020-03-23",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'austria',
                        beginning: {
                            date: "2020-03-15",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'denmark',
                        beginning: {
                            date: "2020-03-16",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'finland',
                        beginning: {
                            date: "2020-03-16",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'ireland',
                        beginning: {
                            date: "2020-03-27",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'czech_republic',
                        beginning: {
                            date: "2020-03-16",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'hungary',
                        beginning: {
                            date: "2020-03-28",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'romania',
                        beginning: {
                            date: "2020-03-25",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'croatia',
                        beginning: {
                            date: "2020-03-18",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'greece',
                        beginning: {
                            date: "2020-03-23",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'china',
                        beginning: {
                            date: "2020-01-22",
                            time: "00:00"
                        },
                    },
                    {
                        flag: 'new_zealand',
                        beginning: {
                            date: "2020-03-26",
                            time: "00:00"
                        },
                    },

                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    hr {
        border: none;
        background: white;
        height: 2px;
        width: 4rem;
        opacity: .1;

        @media screen and (max-width: 548px) {
            display: none;
        }
    }

    .home {
        &__intro {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10rem 0;

            &--img {
                margin-right: 4rem;

                img {
                    width: 10rem
                }
            }

            &--text {
                max-width: 600px;
                text-align: left;
            }

            &--title {
                margin: 0;
            }
            &--subtitle {
                opacity: .4;
                font-weight: normal;
                margin-top: 0;
            }

            @media screen and (max-width: 548px){
                flex-direction: column;
                align-items: flex-start;
                margin: 5rem 0;

                &--img {
                    margin: 0 0 1rem 0;

                    img {
                        width: 6rem;
                    }
                }
            }
        }
    }
</style>
