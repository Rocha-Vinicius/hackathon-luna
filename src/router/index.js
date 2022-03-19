import Vue from 'vue'
import VueRouter from 'vue-router'
import Produtos from '../views/Produtos.vue'
import TelaInicial from '../views/TelaInicial.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
