import Vue from 'vue'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import store from './store'
import App from './App.vue'
import router from './router'
import { i18n } from "./plugins/i18n";

Vue.use(Vuex)

Vue.use(VueScrollTo, {
    container: "body",
    duration: 300,
    easing: "ease",
    offset: -100,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

Vue.config.productionTip = false


new Vue({
  router,
    store,
    i18n,
  render: h => h(App)
}).$mount('#app')
