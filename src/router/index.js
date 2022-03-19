import Vue from 'vue'
import VueRouter from 'vue-router'
import Produtos from '../views/Produtos.vue'
import TelaInicial from '../views/TelaInicial.vue'
import TelaLogin from '../views/TelaLogin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/produtos',
    name: 'produtos',
    component: Produtos
  },
  {
    path: '/',
    name: 'TelaInicial',
    component: TelaInicial
  },
  {
    path: '/login',
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
