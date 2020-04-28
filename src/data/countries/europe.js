const europe = [
    {
        flag: 'france',
        beginning: {
            date: "2020-03-17",
            time: "12:00"
        },
        estimatedEnd:  {
            date: "2020-05-11",
            time: "12:00"
        },
        timezone: "Europe/Paris",
        source: 'https://fr.wikipedia.org/wiki/Confinement_de_2020_en_France'
    },
    {
        flag: 'italy',
        beginning: {
            date: "2020-03-10",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-03",
            time: "00:00"
        },
        easing: true,
        source: 'https://fr.wikipedia.org/wiki/Confinement_de_2020_en_Italie'
    },
    {
        flag: 'germany',
        beginning: {
            date: "2020-03-22",
            time: "00:00"
        },
        easing: true,
        source: "https://fr.wikipedia.org/wiki/Pand%C3%A9mie_de_Covid-19_en_Allemagne"
    },
    {
        flag: 'spain',
        beginning: {
            date: "2020-03-14",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-09",
            time: "00:00"
        },
        source: 'https://fr.wikipedia.org/wiki/Confinement_de_2020_en_Espagne'
    },
    {
        flag: 'belgium',
        beginning: {
            date: "2020-03-18",
            time: "12:00"
        },
        estimatedEnd: {
            date: "2020-05-18",
            time: "00:00"
        },
        timezone: "Europe/Brussels",
        source: 'https://fr.wikipedia.org/wiki/Pand%C3%A9mie_de_Covid-19_en_Belgique'
    },
    {
        flag: 'united_kingdom',
        beginning: {
            date: "2020-03-23",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-07",
            time: "00:00"
        },
        source: 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_the_United_Kingdom'
    },
    {
        flag: 'austria',
        beginning: {
            date: "2020-03-16",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-04",
            time: "00:00"
        },
        easing: true,
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Austria"
    },
    {
        flag: 'switzerland',
        beginning: {
            date: "2020-03-20",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-11",
            time: "00:00"
        },
        easing: true,
        source: "https://www.swissinfo.ch/fre/societe/pand%C3%A9mie_coronavirus--la-situation-en-suisse/45604062"
    },
    {
        flag: 'portugal',
        beginning: {
            date: "2020-03-19",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-02",
            time: "00:00"
        },
        source: 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Portugal'
    },
    {
        flag: 'denmark',
        beginning: {
            date: "2020-03-11",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-10",
            time: "00:00"
        },
        easing: true,
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Denmark"
    },
    {
        flag: 'luxembourg',
        beginning: {
            date: "2020-03-16",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-25",
            time: "00:00"
        },
        source: "https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2020/04-avril/20-strategie-sortie.html"
    },
    {
        flag: 'finland',
        beginning: {
            date: "2020-03-16",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-04-19",
            time: "00:00"
        },
        easing: true
    },
    {
        flag: 'norway',
        beginning: {
            date: "2020-03-19",
            time: "00:00"
        },g: true,
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Norway"
    },
    {
        flag: 'iceland',
        beginning: {
            date: "2020-03-21",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-04",
            time: "00:00"
        },
        easing: true,
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Iceland#Prevention_Measures"
    },
    {
        flag: 'ireland',
        beginning: {
            date: "2020-03-28",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-05",
            time: "00:00"
        },
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_the_United_Kingdom"
    },
    {
        flag: 'slovenia',
        beginning: {
            date: "2020-03-20",
            time: "00:00"
        },
        easing: true,
        source: "http://www.sloveniatimes.com/slovenia-enters-lockdown-mode"
    },
    {
        flag: 'czech_republic',
        beginning: {
            date: "2020-03-16",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-23",
            time: "00:00"
        },
        easing: true,
        source: "https://edition.cnn.com/2020/04/11/health/european-countries-reopening-coronavirus-intl/index.html"
    },
    {
        flag: 'bulgaria',
        beginning: {
            date: "2020-03-17",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-13",
            time: "00:00"
        },
        easing: true,
        source: 'https://bg.ambafrance.org/Les-mesures-en-vigueur-en-Bulgarie-pour-contenir-la-propagation-du-Covid-19'
    },
    {
        flag: 'poland',
        beginning: {
            date: "2020-03-16",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-04-19",
            time: "00:00"
        },
        source: 'https://lepetitjournal.com/varsovie/actualites/coronavirus-en-pologne-durcissement-du-confinement-depuis-mercredi-277197'
    },
    {
        flag: 'ukraine',
        beginning: {
            date: "2020-03-17",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-04-24",
            time: "00:00"
        },
        source: "https://www.lemonde.fr/international/article/2020/04/04/la-pandemie-de-coronavirus-met-du-sel-sur-les-plaies-de-l-ukraine-confinee-et-fragile_6035557_3210.html"
    },
    {
        flag: 'hungary',
        beginning: {
            date: "2020-03-28",
            time: "00:00"
        },
        source: "https://www.lefigaro.fr/flash-actu/coronavirus-la-hongrie-prolonge-le-confinement-jusqu-a-nouvel-ordre-20200409"
    },
    {
        flag: 'slovakia',
        beginning: {
            date: "2020-04-08",
            time: "00:00"
        },
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Slovakia"
    },
    {
        flag: 'romania',
        beginning: {
            date: "2020-03-25",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-15",
            time: "00:00"
        },
    },
    {
        flag: 'serbia',
        beginning: {
            date: "2020-03-17",
            time: "00:00"
        },
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Serbia"
    },
    {
        flag: 'montenegro',
        beginning: {
            date: "2020-03-24",
            time: "00:00"
        },
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Montenegro"
    },
    {
        flag: 'croatia',
        beginning: {
            date: "2020-03-18",
            time: "00:00"
        },
    },
    {
        flag: 'greece',
        beginning: {
            date: "2020-03-23",
            time: "00:00"
        },
    },
    {
        flag: 'malta',
        beginning: {
            date: "2020-03-22",
            time: "00:00"
        },
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Malta"
    },
    {
        flag: 'georgia',
        beginning: {
            date: "2020-04-15",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-10",
            time: "00:00"
        },
    },
    {
        flag: 'lithuania',
        beginning: {
            date: "2020-03-14",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-04-27",
            time: "00:00"
        },
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Lithuania"
    },
    {
        flag: 'latvia',
        beginning: {
            date: "2020-03-17",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-12",
            time: "00:00"
        },
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Latvia"
    },
    {
        flag: 'estonia',
        beginning: {
            date: "2020-03-13",
            time: "00:00"
        },
        estimatedEnd: {
            date: "2020-05-01",
            time: "00:00"
        },
        source: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Latvia"
    },
]

export default europe
