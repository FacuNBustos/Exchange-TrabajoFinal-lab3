import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/HomeView.vue';
import Shop from '../views/ShopView.vue';
import Profile from '../views/ProfileView.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/shop', component: Shop},
    { path: '/profile', component: Profile}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;