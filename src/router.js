import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Admin from "./components/Admin"
import Admin1 from "./components/Admin1"
import Listening from "./components/view admin/Listening"
import Reading from "./components/view admin/Reading"
import Writing from "./components/view admin/Writing"
import Speaking from "./components/view admin/Speaking"
import ListUser from "./components/view admin/ListUser"
import Rtest1 from "./components/view admin/reading test/Rtest1"
import Rtest2 from "./components/view admin/reading test/Rtest2"
import Rtest3 from "./components/view admin/reading test/Rtest3"
import ILlv1 from "./components/view admin/listening level/ILlv1"
import ILlv2 from "./components/view admin/listening level/ILlv2"
import ILlv3 from "./components/view admin/listening level/ILlv3"
import ILTest1 from "./components/view admin/listening test/ILTest1"
import ILTest2 from "./components/view admin/listening test/ILTest2"
import ILTest3 from "./components/view admin/listening test/ILTest3"
import Lresult1 from "./components/view admin/listening test/Lresult1"
import Wtest1 from "./components/view admin/writing test/Wtest1"
import Wtest2 from "./components/view admin/writing test/Wtest2"
import Wtest3 from "./components/view admin/writing test/Wtest3"
import Stest1 from "./components/view admin/speaking test/Stest1"
import Stest2 from "./components/view admin/speaking test/Stest2"
import Stest3 from "./components/view admin/speaking test/Stest3"

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
      path: '/admin1',
      name: 'Admin1',
      component: Admin1
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
          path: '/listuser',
          name: 'ListUser',
          component: ListUser
        },
        {
          path: '/listening',
          name: 'Listening',
          component: Listening
        },
        {
          path: '/reading',
          name: 'Reading',
          component: Reading
        },
        {
          path: '/writing',
          name: 'Writing',
          component: Writing
        },
        {
          path: '/speaking',
          name: 'Speaking',
          component: Speaking
        },
        {
          path: '/rtest1',
          name: 'Rtest1',
          component: Rtest1
        },
        {
          path: '/rtest2',
          name: 'Rtest2',
          component: Rtest2
        },
        {
          path: '/rtest3',
          name: 'Rtest3',
          component: Rtest3
        },
        {
          path: '/illv1',
          name: 'ILlv1',
          component: ILlv1
        },
        {
          path: '/illv2',
          name: 'ILlv2',
          component: ILlv2
        },
        {
          path: '/illv3',
          name: 'ILlv3',
          component: ILlv3
        },
        {
          path: '/iltest1',
          name: 'ILTest1',
          component: ILTest1
        },
        {
          path: '/iltest2',
          name: 'ILTest2',
          component: ILTest2
        },
        {
          path: '/iltest3',
          name: 'ILTest3',
          component: ILTest3
        },
        {
          path: '/stest1',
          name: 'Stest1',
          component: Stest1
        },
        {
          path: '/stest2',
          name: 'Stest2',
          component: Stest2
        },
        {
          path: '/stest3',
          name: 'Stest3',
          component: Stest3
        },
        {
          path: '/wtest1',
          name: 'Wtest1',
          component: Wtest1
        },
        {
          path: '/wtest2',
          name: 'Wtest2',
          component: Wtest2
        },
        {
          path: '/wtest3',
          name: 'Wtest3',
          component: Wtest3
        },
        {
          path: '/lresult1',
          name: 'Lresult1',
          component: Lresult1
        }
      ]
    }
  ]
})
