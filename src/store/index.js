import Vue from 'vue'
import Vuex from 'vuex'
import layoutModes from "../js/layoutModes";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        layoutMode: layoutModes.LIST
    },
    getters: {

    },
    mutations: {
        setLayoutMode(state, value) {
            state.layoutMode = value
        }
    },
    actions: {

    }
})
