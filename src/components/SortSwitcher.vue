<template>
    <div class="sort-switcher" :class="{'selected' : sort}" @click="toggleSort">
        <svg class="sort-switcher__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459"><path d="M178.5 382.5h102v-51h-102v51zM0 76.5v51h459v-51H0zM76.5 255h306v-51h-306v51z"/></svg>
    </div>
</template>

<script>
    export default {
        name: "SortSwitcher",
        computed: {
            sort() { return this.$store.state.sort }
        },
        methods: {
            toggleSort() {
                this.$store.commit('toggleSort')
            }
        }

    }
</script>

<style lang="scss" scoped>
.sort-switcher {
    &__icon {
        fill: #8faabf;
        height: 2rem;
        width: 2rem;
        cursor: pointer;

        .selected & {
            fill: white;
        }

        @media screen and (max-width: 548px) {
            height: 1.5rem;
            width: 1.5rem;
        }
    }
}
</style>
