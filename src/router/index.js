import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateView.vue')
    },
    {
        path: '/',
        name: 'overview',
        component: () => import('../views/OverviewView.vue')
    },
    {
        path: '/create/:brandId',
        name: 'create',
        component: () => import('../views/CreateProductView.vue')
    },
    {
        path: '/brand/:brandid',
        name: 'brand',
        component: () => import('../views/BrandView.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
