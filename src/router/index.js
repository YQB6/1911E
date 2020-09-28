import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/home',
        name:'Home_1',
        component: () => import('../views/Home_1.vue')
      },
      {
        path:'/home_2',
        name:'Home_2',
        component: () => import('../views/Home_2.vue')
      },
      {
        path:'/home_3',
        name:'Home_3',
        component: () => import('../views/Home_3.vue')
      },
      {
        path:'/home_4',
        name:'Home_4',
        component: () => import('../views/Home_4.vue')
      },
      {
        path:'/home_5',
        name:'Home_5',
        component: () => import('../views/Home_5.vue')
      },
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
