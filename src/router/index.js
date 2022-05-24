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
        path: '/test',
        name: 'test',
        component: () => import('../views/CreateProductView.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
