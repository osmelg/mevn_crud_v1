import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import comentario from './views/comentario.vue'
import crearcomentario from './views/crearcomentario.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '*', redirect:'/'},
    { path: '/',name: 'home',component: Home},
    { path: '/api/comentario/:id',name: 'comentario',component: comentario},
    { path: '/api/crearcomentario',name: 'crearcomentario',component: crearcomentario}
  ]
})
