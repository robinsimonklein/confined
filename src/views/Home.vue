<template>
    <div class="home">
        <CountryTimer
                v-for="(country, key) in countries"
                :key="key"
                :name="country.name"
                :flag="country.flag"
                :text="country.text"
                :beginning="country.beginning"
        />
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
                    }
                ]
            }
        },
    }
</script>
