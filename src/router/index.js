import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import Index from '../views/Main/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    children: [{

    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
