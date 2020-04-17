<template>
    <div class="home container">
        <div class="container">
            <div class="home__intro">
                <div class="home__intro--img">
                    <img src="@/assets/svg/coronavirus.svg" alt="coronavirus" />
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
                <template v-if="currentLayout === layoutModes.GRID">
                    <div class="row">
                        <CountryCell
                                v-for="(country, countryKey) in zone"
                                :key="countryKey"
                                :flag="country.flag"
                                :beginning="country.beginning"
                                :end="country.end || null"
                                @select="selectCountryCell(country.flag)"
                        />
                    </div>
                </template>
                <template v-else>
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
                </template>
            </Zone>
            <p>{{ $t('sources') }} : <a href="https://information.tv5monde.com/info/coronavirus-quels-sont-les-pays-confines-352330" target="_blank" rel="noreferrer">TV5MONDE</a>,  <a href="https://fr.wikipedia.org/wiki/Pandémie_de_Covid-19" target="_blank" rel="noreferrer">Wikipédia</a></p>
            <p>{{ $t('last_update') }} : {{ $d(lastUpdate, 'short') }}</p>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import zones from "../data/zones";
    import CountryTimer from "../components/CountryTimer";
    import Zone from "../components/Zone";
    import ZonesLinks from "../components/ZonesLinks";
    import layoutModes from '../js/layoutModes';
    import CountryCell from "../components/CountryCell";

    export default {
        name: 'Home',
        components: {
            CountryCell,
            ZonesLinks,
            Zone,
            CountryTimer
        },
        data() {
            return {
                lastUpdate: new Date('2020-04-16'),
                zones: zones,
                countries: {}
            }
        },
        computed: {
            currentLayout() {
                return this.$store.state.layoutMode
            },
            layoutModes() {
                return layoutModes
            }
        },
        methods: {
            selectCountryCell(country) {
                this.$router.push({path : this.$route.path, query: { c: country}})
                this.$store.commit('setLayoutMode', layoutModes.LIST)
            }
        },
        beforeCreate() {
            // Focus on country
            if(this.$route.query.c){
                this.$store.commit('setLayoutMode', layoutModes.LIST)
            }
        },
        created() {
            // Get countries data
            for(let i = 0; i < this.zones.length; i++){
                this.countries[this.zones[i]] = require(`../data/countries/${this.zones[i]}`).default
            }
        }

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
        margin: auto;
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
