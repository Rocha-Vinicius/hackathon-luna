import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '../views/Cadastro.vue'
import ValidaCadastro from '../views/ValidaCadastro.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/validacadastro',
    name: 'ValidaCadastro',
    component: ValidaCadastro
  },
]

const router = new VueRouter({
  routes
})

export default router
