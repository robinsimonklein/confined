<template>
    <ul class="language-switcher">
        <li
                v-for="(language, key) in languages"
                :key="key"
                class="language-switcher__item"
                :class="{'language-switcher__item--active' : lang === language}"
                @click="changeLanguage(language)"
        >
            {{ language }}
        </li>
    </ul>
</template>

<script>
    import { Trans } from "../plugins/Translation";

    export default {
        name: "LanguageSwitcher",
        data() {
            return {
                languages: ['fr', 'en']
            }
        },
        computed: {
            lang() {
                return this.$route.params.lang
            }
        },
        methods: {
            changeLanguage(lang) {
                // const to = this.$router.resolve({ params: { lang } })
                return Trans.changeLanguage(lang).then(() => {
                    this.$router.push('/'+lang)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .language-switcher {
        display: flex;
        align-items: center;
        list-style-type: none;

        &__item {
            margin-right: .6rem;
            text-transform: uppercase;
            text-decoration: none;
            cursor: pointer;
            &--active {
                border-bottom: 2px solid white
            }
        }
    }
</style>
