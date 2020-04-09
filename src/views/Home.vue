<template>
    <div class="home">
        <CountryTimer
                v-for="(country, key) in countries"
                :key="key"
                :name="country.name"
                :beginning="country.beginnig"
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
                        tag: 'france',
                        beginnig: new Date("2020-03-17T12:00").getTime(),
                    }
                ]
            }
        },
    }
</script>
