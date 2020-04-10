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
        <Zone
                v-for="(zone, zoneKey) in countries"
                :key="zoneKey"
                :name="zoneKey"
        >
            <CountryTimer
                    v-for="(country, countryKey) in zone"
                    :key="countryKey"
                    :flag="country.flag"
                    :beginning="country.beginning"
                    :end="country.end || null"
                    :source="country.source || null"
            />

        </Zone>
        <p>{{ $t('sources') }} : <a href="https://information.tv5monde.com/info/coronavirus-quels-sont-les-pays-confines-352330" target="_blank">TV5MONDE</a>,  <a href="https://fr.wikipedia.org/wiki/Pandémie_de_Covid-19">Wikipédia</a></p>
        <p>{{ $t('last_update') }} : {{ lastUpdate.format("DD/MM/YYYY") }}</p>
    </div>
</template>

<script>
    // @ is an alias to /src

    import CountryTimer from "../components/CountryTimer";
    import dayjs from 'dayjs'
    import Zone from "../components/Zone";

    export default {
        name: 'Home',
        components: {
            Zone,
            CountryTimer
        },
        data() {
            return {
                lastUpdate: dayjs('2020-04-10'),
                countries: {
                    europe: [
                        {
                            flag: 'france',
                            beginning: {
                                date: "2020-03-17",
                                time: "12:00"
                            },
                            source: 'https://fr.wikipedia.org/wiki/Confinement_de_2020_en_France'
                        },
                        {
                            flag: 'italy',
                            beginning: {
                                date: "2020-03-10",
                                time: "00:00"
                            },
                            source: 'https://fr.wikipedia.org/wiki/Confinement_de_2020_en_Italie'
                        },
                        {
                            flag: 'germany',
                            beginning: {
                                date: "2020-03-22",
                                time: "00:00"
                            },
                            source: "https://fr.wikipedia.org/wiki/Pand%C3%A9mie_de_Covid-19_en_Allemagne"
                        },
                        {
                            flag: 'spain',
                            beginning: {
                                date: "2020-03-14",
                                time: "00:00"
                            },
                            source: 'https://fr.wikipedia.org/wiki/Confinement_de_2020_en_Espagne'
                        },
                        {
                            flag: 'belgium',
                            beginning: {
                                date: "2020-03-18",
                                time: "12:00"
                            },
                            source: 'https://fr.wikipedia.org/wiki/Pand%C3%A9mie_de_Covid-19_en_Belgique'
                        },
                        {
                            flag: 'united_kingdom',
                            beginning: {
                                date: "2020-03-23",
                                time: "00:00"
                            },
                            source: 'https://fr.wikipedia.org/wiki/Confinement_de_2020_au_Royaume-Uni'
                        },
                        {
                            flag: 'austria',
                            beginning: {
                                date: "2020-03-16",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'denmark',
                            beginning: {
                                date: "2020-03-11",
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
                                date: "2020-03-28",
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
                    ],
                    asia: [
                        {
                            flag: 'china',
                            beginning: {
                                date: "2020-01-22",
                                time: "00:00"
                            },
                            end: {
                                date: "2020-04-07",
                                time: "00:00"
                            },
                            source: 'https://fr.wikipedia.org/wiki/Pandémie_de_Covid-19_en_Chine'
                        },
                    ],
                    oceania: [
                        {
                            flag: 'new_zealand',
                            beginning: {
                                date: "2020-03-26",
                                time: "00:00"
                            },
                        },
                    ]
                }
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
