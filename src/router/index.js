import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {Trans} from "../plugins/Translation";

Vue.use(VueRouter)

const routes = [
    {
        path: '/:lang',
        name: 'Home',
        component: Home,
        beforeEnter: (Trans.routeMiddleware),
        children: []
    },
    {
        // Redirect user to supported lang version.
        path: '*',
        redirect () {
            return Trans.getUserSupportedLang()
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
