import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import quasarIconSet from 'quasar/icon-set/svg-material-icons'
import { createRouter, createWebHistory } from 'vue-router'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Landing from '@/pages/Landing.vue';


import App from './App.vue'

const myApp = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "Home",
        component: Home
    },
    {

        path: "/about",
        name: "About",
        component: About

    },
    {

        path: "/land",
        name: "Landing",
        component: Landing

    }]
});

myApp
    .use(Quasar, {
        plugins: {},
        lang: quasarLang,
        iconSet: quasarIconSet,
    }).use(router)

    .mount('#app')