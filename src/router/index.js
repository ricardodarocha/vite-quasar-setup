import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Landing from '@/pages/Landing.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/home",
        name: "Home",
        component: Home
    },
    {

        path: "/about",
        name: "About",
        component: About

    },
    {

        path: "/",
        name: "Landing",
        component: Landing

    }]
});

export default router