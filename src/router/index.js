import Vue from 'vue'
import VueRouter from 'vue-router'
import Treat from '../views/Treat.vue'
import Attract from '../views/Attract.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Treat',
    component: Treat
  },
  {
    path: '/attract',
    name: 'Attract',
    component: Attract
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
