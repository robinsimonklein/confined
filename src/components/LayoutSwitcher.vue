<template>
    <ul class="layout-switcher">
        <li
                v-for="(layout, key) in layoutModes"
                :key="key"
                class="layout-switcher__item" @click="changeLayoutMode(layout)"
                :class="{ 'selected' : layout === currentLayout }"
                v-html="icons[layout]"
        />
    </ul>
</template>

<script>
    import layoutModes from '../js/layoutModes';

    export default {
        name: "LayoutSwitcher",
        computed: {
            currentLayout() {
                return this.$store.state.layoutMode
            },
            layoutModes() {
                return layoutModes
            },
            icons() {
                let icons = {}
                icons[layoutModes.GRID] = '<svg class="layout-switcher__icon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><path d="M0 0h16v16H0zM19 0h16v16H19zM0 19h16v16H0zM19 19h16v16H19z"/></svg>'
                icons[layoutModes.LIST] = '<svg class="layout-switcher__icon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><path d="M0 19.52h35V35H0zM0 0h35v15.481H0z"/></svg>'
                return icons
            }
        },
        methods: {
            changeLayoutMode(mode) {
                this.$router.replace({path: this.$route.path, query: {}})
                this.$store.commit('setLayoutMode', mode)
            },
        }

    }
</script>

<style lang="scss">
.layout-switcher {
    display: flex;
    align-items: center;
    padding: 0;
    list-style-type: none;

    &__item {
        margin-right: .5rem;

    }
    &__icon {
        fill: #8faabf;
        height: 1.6rem;
        width: 1.6rem;
        cursor: pointer;

        .selected &{
            fill: white;
        }

        @media screen and (max-width: 548px) {
            height: 1.5rem;
            width: 1.5rem;
        }
    }
}
</style>
