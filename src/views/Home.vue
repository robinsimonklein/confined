<template>
    <div class="home">
        <div class="home__intro">
            <div class="home__intro--img">
                <img src="@/assets/svg/coronavirus.svg" />
            </div>
            <div class="home__intro--text">
                <h1 Home class="home__intro--title">DURÉE DE CONFINEMENT</h1>
                <h2 Home class="home__intro--subtitle">Pour le COVID19</h2>
                <p>Le monde connaît actuellement une pandémie planétaire de la maladie <a href="https://fr.wikipedia.org/wiki/Pand%C3%A9mie_de_Covid-19" target="_blank">COVID-19</a>,
                    causée par le <a href="https://fr.wikipedia.org/wiki/Coronavirus" target="_blank">Coronavirus</a>. Afin de stopper la propagation du virus, de nombreux
                    pays ont mis en place le confinement de tous leurs habitants.<br/>
                    Ce site présente une liste non-exhaustive de ces pays ainsi que la durée depuis laquelle le confinement à été mis en place dans ces derniers.
                </p>
                <p><strong>#StayAtHome</strong></p>
            </div>
        </div>
        <template
                v-for="(country, index, key) in countries"
        >
            <CountryTimer
                    :key="key"
                    :name="country.name"
                    :flag="country.flag"
                    :text="country.text"
                    :beginning="country.beginning"
            />
            <hr :key="key" v-if="index < countries.length - 1" />

        </template>
    </div>
</template>

<script>
    // @ is an alias to /src

    import CountryTimer from "../components/CountryTimer";
    export default {
        name: 'Home',
        components: {
            CountryTimer
        },
        data() {
            return {
                countries: [
                    {
                        name: 'France',
                        flag: 'france',
                        text: {
                            in_country: 'France',
                            since: 'Confinement depuis',
                            days: 'jours',
                            hours: 'heures',
                            min: 'min.',
                            sec: 'sec.',
                        },
                        beginning: new Date("2020-03-17T12:00").getTime(),
                    },
                    {
                        name: 'Italie',
                        flag: 'italy',
                        text: {
                            in_country: 'Italie',
                            since: 'Confinement depuis',
                            days: 'jours',
                            hours: 'heures',
                            min: 'min.',
                            sec: 'sec.',
                        },
                        beginning: new Date("2020-03-09").getTime(),
                    },
                    {
                        name: 'Espagne',
                        flag: 'spain',
                        text: {
                            in_country: 'Espagne',
                            since: 'Confinement depuis',
                            days: 'jours',
                            hours: 'heures',
                            min: 'min.',
                            sec: 'sec.',
                        },
                        beginning: new Date("2020-03-15").getTime(),
                    }
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
