import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App.vue'
import router from './router'
import { i18n } from "./plugins/i18n";

Vue.use(Vuex)

Vue.config.productionTip = false


new Vue({
  router,
    store,
    i18n,
  render: h => h(App)
}).$mount('#app')
