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
            <ZonesLinks :countries="zones" />
            <Zone
                    v-for="(zone, zoneKey) in zones"
                    :key="zoneKey"
                    :name="zone"
            />

            <div class="home__infos">
                <ul class="home__legend">
                    <li class="home__legend-item home__legend-item--danger"><i class="home__legend-color"></i>{{$t('legend.danger')}}</li>
                    <li class="home__legend-item home__legend-item--easing"><i class="home__legend-color"></i>{{$t('legend.easing')}}</li>
                    <li class="home__legend-item home__legend-item--success"><i class="home__legend-color"></i>{{$t('legend.success')}}</li>
                </ul>
                <p>{{ $t('sources') }} :
                    <a href="https://information.tv5monde.com/info/coronavirus-quels-sont-les-pays-confines-352330" target="_blank" rel="noreferrer">TV5MONDE</a>,
                    <a href="https://fr.wikipedia.org/wiki/Pandémie_de_Covid-19" target="_blank" rel="noreferrer">Wikipedia</a>,
                    <a href="https://edition.cnn.com/2020/04/11/health/european-countries-reopening-coronavirus-intl/index.html" target="_blank" rel="noreferrer">CNN</a>
                </p>
                <p>{{ $t('last_update') }} : {{ $d(lastUpdate, 'short') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import zones from "../data/zones";
    import Zone from "../components/Zone";
    import ZonesLinks from "../components/ZonesLinks";
    import layoutModes from '../js/layoutModes';

    export default {
        name: 'Home',
        components: {
            ZonesLinks,
            Zone,
        },
        data() {
            return {
                lastUpdate: new Date('2020-04-20'),
                zones: zones,
            }
        },
        computed: {
            currentLayout() { return this.$store.state.layoutMode },
            layoutModes() {
                return layoutModes
            },
        },
        beforeCreate() {
            // Focus on country
            if(this.$route.query.c){
                this.$store.commit('setLayoutMode', layoutModes.LIST)
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
        position: relative;
        margin: auto;
        padding-bottom: 1rem;
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

        &__infos {
            @media screen and (max-width: 548px) {
                margin-top: 2rem;
            }
        }

        &__legend {
            display: inline-flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 0;
            list-style-type: none;

            &-item {
                display: inline-flex;
                align-items: center;
                justify-content: flex-start;
                text-align: left;
                margin: .5rem 0;

                &--danger {
                    color: $color-danger;

                    .home__legend-color{
                        background: $color-danger;
                    }
                }
                &--easing {
                    color: $color-easing;

                    .home__legend-color{
                        background: $color-easing;
                    }
                }
                &--success {
                    color: $color-success;

                    .home__legend-color{
                        background: $color-success;
                    }
                }

            }

            &-color {
                display: inline-block;
                height: 1.5rem;
                width: 1.5rem;
                border-radius: 100%;
                margin-right: 1rem;
                flex-shrink: 0;
            }
        }
    }
</style>
