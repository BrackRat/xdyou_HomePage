import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import('../pages/index.vue')
    },
    {
        path: "/eula",
        component: () => import('../pages/eula.vue')
    },
    {
        path: "/supporters",
        component: () => import('../pages/supporters.vue')
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})


export default router