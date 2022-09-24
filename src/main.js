import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import quasarIconSet from 'quasar/icon-set/svg-material-icons'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import { createPinia } from 'pinia';

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'


import App from './App.vue'

const myApp = createApp(App)

import router from '@/router'

myApp
    .use(Quasar, {
        plugins: {
            Notify
        },
        config: {
            notify: {},
            brand: {
                primary: '#004E89',
                secondary: '#D64933',
                accent: '#e16b48',

                dark: '#14192c',

                positive: '#2be3b2',
                negative: '#f31261',
                info: '#72d3d1',
                warning: '#E2C044'
            }


            
        },
        lang: quasarLang,
        iconSet: quasarIconSet,
    })
    .use(router)
    .use(createPinia()) 
    .mount('#app')

