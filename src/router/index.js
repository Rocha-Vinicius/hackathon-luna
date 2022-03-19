import Vue from 'vue'
import VueRouter from 'vue-router'
import Produtos from '../views/Produtos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/produtos',
    name: 'produtos',
    component: Produtos
  }
]

const router = new VueRouter({
  routes
})

export default router
