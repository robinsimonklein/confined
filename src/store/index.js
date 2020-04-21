import Vue from 'vue'
import Vuex from 'vuex'
import layoutModes from "../js/layoutModes";
import zones from "../data/zones";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        layoutMode: layoutModes.GRID,
        sort: false,

    },
    getters: {

    },
    mutations: {
        setLayoutMode(state, value) {
            state.layoutMode = value
        },
        toggleSort(state) {
            state.sort = !state.sort
        }
    },
    actions: {

    }
})
