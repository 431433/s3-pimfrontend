import Vue from 'vue'
import VueRouter from 'vue-router'
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter)

const routes = [
    {
        path: '/create',
        name: 'create',
        component: () => import('../views/CreateView.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/',
        name: 'start',
        component: () => import('../views/StartView.vue')
    },
    {
        path: '/overview',
        name: 'overview',
        component: () => import('../views/OverviewView.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/create/:brandId',
        name: 'create',
        component: () => import('../views/CreateProductView.vue'),
        beforeEnter: authGuard
    },
    {
        path: '/brand/:brandid',
        name: 'brand',
        component: () => import('../views/BrandView.vue'),
        beforeEnter: authGuard
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
