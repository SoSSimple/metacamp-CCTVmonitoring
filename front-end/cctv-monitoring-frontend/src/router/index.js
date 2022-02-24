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
      },
      {
        path: '/user',
        component: () => import('../views/user')
      },
      {
        path: '/device/list',
        component: () => import('../views/device/list')
      },
      {
        path: '/device/cctv',
        component: () => import('../views/device/cctv'),
        children: [
          {
            path: '/device/cctv/device1',
            component: () => import('../components/cctv/device1.vue')
          },
          {
            path: '/device/cctv/device2',
            component: () => import('../components/cctv/device2.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('../views/auth'),
    children: [
      {
        path: '/auth/login',
        component: () => import('../views/auth/login'),
        meta: { header: false }
      },
      {
        path: '/auth/signIn',
        component: () => import('../views/auth/SignIn'),
        meta: { header: false }
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
