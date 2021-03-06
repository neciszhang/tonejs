import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Music from './views/Music.vue'
import Test from './views/Test.vue'
import New from './views/New.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
