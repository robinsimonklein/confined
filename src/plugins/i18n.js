import Vue from 'vue'
import VueI18n from "vue-i18n";
import en from '@/lang/en.json'

const dateTimeFormats = {
    'en': {
        short: {
            year: 'numeric', month: 'short', day: 'numeric'
        },
        medium: {
            year: 'numeric', month: 'long', day: 'numeric'
        },
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: 'numeric', minute: 'numeric', hour12: true
        }
    },
    'fr': {
        short: {
            year: 'numeric', month: 'short', day: 'numeric'
        },
        medium: {
            year: 'numeric', month: 'long', day: 'numeric'
        },
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: 'numeric', minute: 'numeric'
        }
    },
}

Vue.use(VueI18n)
export const i18n = new VueI18n({
    dateTimeFormats,
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en }
})
