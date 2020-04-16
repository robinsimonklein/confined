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
        <ZonesLinks :countries="countries" />
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
                    :estimated-end="country.estimatedEnd || null"
                    :end="country.end || null"
                    :timezone="country.timezone || null"
                    :source="country.source || null"
            />

        </Zone>
        <p>{{ $t('sources') }} : <a href="https://information.tv5monde.com/info/coronavirus-quels-sont-les-pays-confines-352330" target="_blank">TV5MONDE</a>,  <a href="https://fr.wikipedia.org/wiki/Pandémie_de_Covid-19">Wikipédia</a></p>
        <p>{{ $t('last_update') }} : {{ $d(lastUpdate, 'short') }}</p>
    </div>
</template>

<script>
    // @ is an alias to /src

    import CountryTimer from "../components/CountryTimer";
    import Zone from "../components/Zone";
    import ZonesLinks from "../components/ZonesLinks";
    import moment from "moment-timezone";

    export default {
        name: 'Home',
        components: {
            ZonesLinks,
            Zone,
            CountryTimer
        },
        data() {
            return {
                lastUpdate: new Date('2020-04-16'),
                countries: {
                    europe: [
                        {
                            flag: 'france',
                            beginning: {
                                date: "2020-03-17",
                                time: "12:00"
                            },
                            estimatedEnd:  {
                                date: "2020-05-11",
                                time: "12:00"
                            },
                            timezone: "Europe/Paris",
                            source: 'https://fr.wikipedia.org/wiki/Confinement_de_2020_en_France'
                        },
                        {
                            flag: 'italy',
                            beginning: {
                                date: "2020-03-10",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-05-03",
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
                            estimatedEnd: {
                                date: "2020-04-25",
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
                            estimatedEnd: {
                                date: "2020-04-05",
                                time: "00:00"
                            },
                            timezone: "Europe/Brussels",
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
                            estimatedEnd: {
                                date: "2020-04-13",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'switzerland',
                            beginning: {
                                date: "2020-03-20",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-04-26",
                                time: "00:00"
                            },
                            source: "https://www.swissinfo.ch/fre/societe/pand%C3%A9mie_coronavirus--la-situation-en-suisse/45604062"
                        },
                        {
                            flag: 'denmark',
                            beginning: {
                                date: "2020-03-11",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-04-13",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'finland',
                            beginning: {
                                date: "2020-03-16",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-03-19",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'ireland',
                            beginning: {
                                date: "2020-03-28",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-04-12",
                                time: "00:00"
                            }
                        },
                        {
                            flag: 'czech_republic',
                            beginning: {
                                date: "2020-03-16",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'bulgaria',
                            beginning: {
                                date: "2020-03-17",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'republic_of_poland',
                            beginning: {
                                date: "2020-03-16",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-04-12",
                                time: "00:00"
                            },
                            source: 'https://lepetitjournal.com/varsovie/actualites/coronavirus-en-pologne-durcissement-du-confinement-depuis-mercredi-277197'
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
                            flag: 'georgia',
                            beginning: {
                                date: "2020-04-15",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-04-25",
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
                            message: 'deconfinement',
                            source: 'https://fr.wikipedia.org/wiki/Pandémie_de_Covid-19_en_Chine'
                        },
                        {
                            flag: 'russia',
                            beginning: {
                                date: "2020-03-30",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'india',
                            beginning: {
                                date: "2020-03-24",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-05-03",
                                time: "00:00"
                            }
                        },
                        {
                            flag: 'philippines',
                            beginning: {
                                date: "2020-03-15",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-04-30",
                                time: "00:00"
                            },
                            source: "https://en.wikipedia.org/wiki/2020_Luzon_enhanced_community_quarantine"
                        },
                        {
                            flag: 'israel',
                            beginning: {
                                date: "2020-03-17",
                                time: "00:00"
                            },
                        },
                    ],
                    north_america: [
                        {
                            flag: 'canada',
                            beginning: {
                                date: "2020-03-23",
                                time: "00:00"
                            },
                            source: 'https://ici.radio-canada.ca/nouvelle/1691229/pause-prolongation-quebec-13-avril-coronavirus'
                        },
                        {
                            flag: 'usa',
                            beginning: {
                                date: "2020-03-19",
                                time: "00:00"
                            },
                        },
                    ],
                    south_america: [
                        {
                            flag: 'brazil',
                            beginning: {
                                date: "2020-03-24",
                                time: "00:00"
                            },
                            source: 'https://www.rappler.com/world/regions/latin-america/255439-bolivia-total-lockdown-coronavirus-march-22-2020'
                        },
                        {
                            flag: 'bolivia',
                            beginning: {
                                date: "2020-03-22",
                                time: "00:00"
                            },
                            source: 'https://www.rappler.com/world/regions/latin-america/255439-bolivia-total-lockdown-coronavirus-march-22-2020'
                        },
                        {
                            flag: 'colombia',
                            beginning: {
                                date: "2020-03-25",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'argentina',
                            beginning: {
                                date: "2020-03-19",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'venezuela',
                            beginning: {
                                date: "2020-03-17",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'peru',
                            beginning: {
                                date: "2020-03-16",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'panama',
                            beginning: {
                                date: "2020-03-22",
                                time: "00:00"
                            },
                            source: "https://edition.cnn.com/2020/04/01/world/panama-coronavirus-sex-intl/index.html"
                        },
                    ],
                    africa: [
                        {
                            flag: 'morocco',
                            beginning: {
                                date: "2020-03-20",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-04-20",
                                time: "00:00"
                            }
                        },
                        {
                            flag: 'tunisia',
                            beginning: {
                                date: "2020-03-22",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'algeria',
                            beginning: {
                                date: "2020-03-24",
                                time: "00:00"
                            },
                            source: "https://www.jeuneafrique.com/925469/societe/maroc-tunisie-algerie-le-confinement-a-lepreuve-de-la-realite-sociale/"
                        },
                        {
                            flag: 'zimbabwe',
                            beginning: {
                                date: "2020-03-30",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'botswana',
                            beginning: {
                                date: "2020-04-02",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-04-30",
                                time: "00:00"
                            },
                            source: "https://www.iol.co.za/news/africa/coronavirus-in-africa-botswanas-president-to-seek-6-month-extension-of-state-of-emergency-46349571"
                        },
                        {
                            flag: 'nigeria',
                            beginning: {
                                date: "2020-03-30",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-04-26",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'rwanda',
                            beginning: {
                                date: "2020-03-22",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-04-19",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'malawi',
                            beginning: {
                                date: "2020-04-11",
                                time: "00:00"
                            },
                            estimatedEnd: {
                                date: "2020-05-09",
                                time: "00:00"
                            },
                        },
                        {
                            flag: 'south_africa',
                            beginning: {
                                date: "2020-03-27",
                                time: "00:00"
                            },
                        },
                    ],
                    oceania: [
                        {
                            flag: 'australia',
                            beginning: {
                                date: "2020-03-29",
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
                    ],
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
