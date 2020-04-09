import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/trans'
import { i18n } from '@/plugins/i18n'

const Trans = {
    get defaultLanguage () {
        return DEFAULT_LANGUAGE
    },
    get supportedLanguages () {
        return SUPPORTED_LANGUAGES
    },
    get currentLanguage () {
        return i18n.locale
    },
    set currentLanguage (lang) {
        i18n.locale = lang
    },
    /**
     * Gets the first supported language that matches the user's
     * @return {String}
     */
    getUserSupportedLang () {
        const userPreferredLang = Trans.getUserLang()

        // Check if user preferred browser lang is supported
        if (Trans.isLangSupported(userPreferredLang.lang)) {
            return userPreferredLang.lang
        }
        // Check if user preferred lang without the ISO is supported
        if (Trans.isLangSupported(userPreferredLang.langNoISO)) {
            return userPreferredLang.langNoISO
        }

        return Trans.defaultLanguage
    },
    /**
     * Returns the users preferred language
     */
    getUserLang () {
        const lang = window.navigator.language || window.navigator.userLanguage || Trans.defaultLanguage
        return {
            lang: lang,
            langNoISO: lang.split('-')[0]
        }
    },
    /**
     * Loads new translation messages and changes the language when finished
     * @param lang
     * @return {Promise<any>}
     */
    changeLanguage (lang) {
        if (!Trans.isLangSupported(lang)) return Promise.reject(new Error('Language not supported'))
        if (i18n.locale === lang) return Promise.resolve(lang) // has been loaded prior
        return Trans.loadLanguageFile(lang).then(msgs => {
            i18n.setLocaleMessage(lang, msgs.default || msgs)
            return Trans.setI18nLanguageInServices(lang)
        })
    },
    /**
     * Sets the language to various services (axios, the html tag etc)
     * @param {String} lang
     * @return {String} lang
     */
    setI18nLanguageInServices (lang) {
        Trans.currentLanguage = lang
        // axios.defaults.headers.common['Accept-Language'] = lang
        document.querySelector('html').setAttribute('lang', lang)
        return lang
    },
    /**
     * Async loads a translation file
     * @param lang
     * @return {Promise<*>|*}
     */
    loadLanguageFile (lang) {
        return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.json`)
    },
    /**
     * Checks if a lang is supported
     * @param {String} lang
     * @return {boolean}
     */
    isLangSupported (lang) {
        return Trans.supportedLanguages.includes(lang)
    },
    setMeta(meta) {

        console.log(meta)

        // If a route with a title was found, set the document (page) title to that value.
        if(meta) document.title = i18n.t(meta.title);

        // Remove any stale meta tags from the document using the key attribute we set below.
        Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

        // Skip rendering meta tags if there are none.
        if(!meta) return;

        // Turn the meta tag definitions into actual elements in the head.
        meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta');


            Object.keys(tagDef).forEach((key) => {
                tag.setAttribute(key, key === 'content' && tagDef.trans ? i18n.t(tagDef[key]) : tagDef[key]);
            });

            // We use this to track which meta tags we create, so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })
            // Add the meta tags to the document head.
            .forEach(tag => document.head.appendChild(tag));
    },
    /**
     * Checks if the route's param is supported, if not, redirects to the first supported one.
     * @param {Route} to
     * @param {Route} from
     * @param {Function} next
     * @return {*}
     */
    routeMiddleware (to, from, next) {
        // Load async message files here
        const lang = to.params.lang

        // Routing
        if (!Trans.isLangSupported(lang)) return next(Trans.getUserSupportedLang())
        return Trans.changeLanguage(lang).then(() => {
            Trans.setMeta(to.meta)
            next()
        })
    },
    /**
     * Returns a new route object that has the current language already defined
     * To be used on pages and components, outside of the main \ route, like on Headers and Footers.
     * @example <router-link :to="$i18nRoute({ name: 'someRoute'})">Click Me </router-link>
     * @param {Object} to - route object to construct
     */
    i18nRoute (to) {
        return {
            ...to,
            params: { lang: this.currentLanguage, ...to.params }
        }
    }
}

export { Trans }
