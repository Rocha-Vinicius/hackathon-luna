import Vue from 'vue'
import VueRouter from 'vue-router'
import Produtos from '../views/Produtos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'produtos',
    component: Produtos
  }
]

const router = new VueRouter({
  routes
})

export default router
