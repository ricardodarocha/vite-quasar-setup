import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Landing from '@/pages/Landing.vue';
import { createRouter, createWebHistory } from 'vue-router'

import routes from '@/router/routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router