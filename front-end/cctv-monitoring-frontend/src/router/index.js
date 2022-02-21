import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('../views/dashboard')
      },
      {
        path: '/department',
        component: () => import('../views/department')
      }
    ]
  },
  {
    path: '*',
    component: () => import('../components/NotFound.vue'),
    meta: { header: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
