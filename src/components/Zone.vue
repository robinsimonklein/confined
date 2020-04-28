<template>
    <div class="zone" :id="name">
        <h3 class="zone__name">{{ $t('zones.'+name) }}</h3>

        <template v-if="currentLayout === layoutModes.GRID">
            <transition-group name="flip-grid" tag="div" class="row">
                <CountryCell
                        v-for="country in (sort ? sortedCountries : countries)"
                        :key="country.flag"
                        :flag="country.flag"
                        :beginning="country.beginning"
                        :end="country.end || null"
                        :easing="country.easing || false"
                        @select="selectCountryCell(country.flag)"
                />
            </transition-group>
        </template>
        <template v-else>
            <transition-group name="flip-list" tag="div" class="zone__list row">
                <CountryTimer
                        v-for="country in (sort ? sortedCountries : countries)"
                        :key="country.flag"
                        :flag="country.flag"
                        :beginning="country.beginning"
                        :estimated-end="country.estimatedEnd || null"
                        :end="country.end || null"
                        :easing="country.easing || false"
                        :timezone="country.timezone || null"
                        :source="country.source || null"
                        :message="country.message || null"
                />
            </transition-group>
        </template>
    </div>
</template>

<script>
    import layoutModes from "../js/layoutModes";
    import CountryTimer from "./CountryTimer";
    import CountryCell from "./CountryCell";

    export default {
        name: "Zone",
        props: {
            name: String
        },
        data() {
            return {
                countries: [],
                sortedCountries: []
            }
        },
        components: { CountryTimer, CountryCell },
        computed: {
            currentLayout() { return this.$store.state.layoutMode },
            sort() { return this.$store.state.sort },
            layoutModes() { return layoutModes },

        },
        methods: {
            selectCountryCell(country) {
                this.$router.push({path : this.$route.path, query: { c: country}})
                this.$store.commit('setLayoutMode', layoutModes.LIST)
            },
            sortCountries(countries) {
                let newCountries = Array.from(countries)
                let sorted = newCountries.sort((a, b) => {
                    return new Date(a.beginning.date).getTime() - new Date(b.beginning.date).getTime()
                })
                return sorted
            }
        },
        created(){
            const countries = require(`../data/countries/${this.name}`).default
            this.countries = countries
            this.sortedCountries = this.sortCountries(countries)
        }
    }
</script>

<style lang="scss" scoped>
    .zone {
        &__name {
            font-size: 2rem;
            text-transform: uppercase;
            border-bottom: 2px solid $color-primary;
            color: $color-white;
            display: inline-block;
        }

        &__list {
            justify-content: center;
        }
    }
    .flip-grid-move, .flip-list-move {
        transition: transform .5s ease;
    }
</style>
