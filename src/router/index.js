import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '../views/Cadastro.vue'
import Produtos from '../views/Produtos.vue'
import TelaInicial from '../views/TelaInicial.vue'
import TelaLogin from '../views/TelaLogin'
import QuemSomos from '../views/QuemSomos'

Vue.use(VueRouter)

const routes = [
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
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: Produtos
  },
  {
    path: '/QuemSomos',
    name: 'QuemSomos',
    component: QuemSomos
  },
    
]

const router = new VueRouter({
  routes
})

export default router
