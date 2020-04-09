<template>
    <div class="home">
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
                            since: 'Confinés depuis',
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
                            since: 'Confinés depuis',
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
                            since: 'Confinés depuis',
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
</style>
