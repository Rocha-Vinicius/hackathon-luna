import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaLogin from '../views/TelaLogin.vue'
import QuemSomos from '../views/QuemSomos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/TelaLogin',
    name: 'TelaLogin',
    component: TelaLogin
  },
  {
    path: '/QuemSomos',
    name: 'QuemSomos',
    component: QuemSomos
  }
]

const router = new VueRouter({
  routes
})

export default router
