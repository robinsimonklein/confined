<template>
    <nav class="zones-links">
        <ul class="zones-links__list">
            <li
                    class="zones-links__item"
                    v-for="(zone, key) in countries"
                    :key="key"
            >
                <a class="zones-links__link" :href="'#'+key">{{ $t(`zones.${key}`) }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "ZonesLinks",
        props: {
            countries: Object
        }
    }
</script>

<style lang="scss" scoped>
.zones-links {
    width: 100%;

    &__list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        padding: 0;
        list-style-type: none;

        @media screen and(max-width: 548px) {
            justify-content: flex-start;
        }
    }
    &__item {
        margin: 1rem;
        padding: .6rem .9rem;
        background: #001b31;
        border-bottom: 2px solid rgba(#f95850, .5);

        @media screen and(max-width: 548px) {
            margin: .2rem;
        }
    }
    &__link {
        text-decoration: none;
        padding: 0;
        margin: 0;
        font-size: 1.1rem;
        font-weight: bold;
        text-transform: uppercase;
    }
}
</style>
