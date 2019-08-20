import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AdminPage from "./components/Admin/AdminPage.vue"
import Listening from "./components/Admin/type/Listening"
import Reading from "./components/Admin/type/Reading"
import Speaking from "./components/Admin/type/Speaking"
import Writing from "./components/Admin/type/Writing"
import ListUser from "./components/Admin/ListUser"
import ListTest from "./components/Admin/ListTest"
import ListQuestion from "./components/Admin/ListQuestion"

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
      path: '/admin/:id',
      name: 'admin',
      component: AdminPage,
      children: [
        {
          path: 'type/:typeId',
          name: 'listening',
          component: Listening
        },
        {
          path: 'type/:typeId',
          name: 'reading',
          component: Reading
        },
        {
          path: 'type/:typeId',
          name: 'speaking',
          component: Speaking
        },
        {
          path: 'type/:typeId',
          name: 'writing',
          component: Writing
        },
        {
          path: 'listuser',
          name: 'ListUser',
          component: ListUser
        },
        {
          path: 'list_question',
          name: 'ilquestion',
          component: ListQuestion
        },
        {
          path: 'list_test',
          name: 'illv',
          component: ListTest,
        }
      ]
    }
  ]
}
)

