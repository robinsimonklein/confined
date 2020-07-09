import Vue from 'vue'
import VueRouter from 'vue-router'
import {Trans} from "../plugins/Translation";
import Maintenance from "../views/Maintenance";

Vue.use(VueRouter)

const routes = [
    {
        path: '/:lang',
        name: 'Home',
        component: Maintenance,
        beforeEnter: (Trans.routeMiddleware),
        meta: {
            title: 'pages.home.meta.title',
            metaTags: [

                {
                    name: 'description',
                    content: 'pages.home.meta.description',
                    trans: true
                },
                {
                    name: 'keywords',
                    content: 'pages.home.meta.keywords',
                    trans: true
                },
                {
                    property: 'og:url',
                    content: 'pages.home.meta.url',
                    trans: true
                },
                {
                    property: 'og:type',
                    content: 'website',
                    trans: false
                },
                {
                    property: 'og:title',
                    content: 'pages.home.meta.title',
                    trans: true
                },
                {
                    property: 'og:description',
                    content: 'pages.home.meta.description',
                    trans: true
                },
                {
                    property: 'og:image',
                    content: 'pages.home.meta.image',
                    trans: true
                },
                {
                    property: 'og:locale',
                    content: 'pages.home.meta.locale',
                    trans: true
                }
            ],
        },
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
