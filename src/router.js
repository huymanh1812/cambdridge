import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Admin from "./components/Admin"
import Listening from "./components/view admin/Listening"
import Reading from "./components/view admin/Reading"
import Writing from "./components/view admin/Writing"
import Speaking from "./components/view admin/Speaking"
import Rtest1 from "./components/view admin/reading test/Rtest1"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'listening',
          name: 'Listening',
          component: Listening
        },
        {
          path: 'reading',
          name: 'Reading',
          component: Reading,
          children: [
            {
              path: 'rtest2',
              name: 'Rtest2',
              component: Rtest1
            }
          ]
        },
        {
          path: 'writing',
          name: 'Writing',
          component: Writing
        },
        {
          path: 'speaking',
          name: 'Speaking',
          component: Speaking
        },
        {
          path: 'rtest1',
          name: 'Rtest1',
          component: Rtest1
        }
      ]
    }
  ]
})
