import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Admin from "./components/Admin"
import Admin1 from "./components/Admin1"

// import Type from "./components/view admin/type/Type"
import Listening from "./components/view admin/type/Listening"
import Reading from "./components/view admin/type/Reading"
import Speaking from "./components/view admin/type/Speaking"
import Writing from "./components/view admin/type/Writing"

import ListUser from "./components/view admin/ListUser"
// import Rtest1 from "./components/view admin/reading test/Rtest1"
// import Rtest2 from "./components/view admin/reading test/Rtest2"
// import Rtest3 from "./components/view admin/reading test/Rtest3"

import ILlv from "./components/view admin/listening level/ILlv"
// import IRlv from "./components/view admin/reading level/IRlv"
// import ISlv from "./components/view admin/speaking level/ISlv"
// import IWlv from "./components/view admin/writing level/IWlv"

// import TLlv from "./components/view admin/listening level/TLlv"
// import TRlv from "./components/view admin/reading level/TRlv"
// import TSlv from "./components/view admin/speaking level/TSlv"
// import TWlv from "./components/view admin/writing level/TWlv"

// // import ILTest from "./components/view admin/listening level/listening test/ILTest"
import ILQuestion from "./components/view admin/listening level/listening test/ILQuestion"

// import Wtest1 from "./components/view admin/writing test/Wtest1"
// import Wtest2 from "./components/view admin/writing test/Wtest2"
// import Wtest3 from "./components/view admin/writing test/Wtest3"
// import Stest1 from "./components/view admin/speaking test/Stest1"
// import Stest2 from "./components/view admin/speaking test/Stest2"
// import Stest3 from "./components/view admin/speaking test/Stest3"

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
          component: ILQuestion
        },
        {
          path: 'list_test',
          name: 'illv',
          component: ILlv,
        }
      ]
    }
  ]
}
)
//           children: [
//             {
//               path: 'level/:id',
//               name: 'ILlv',
//               component: ILlv,
//               children: [
//                 
//               ]
//             },
//             {
//               path: 'level/:id',
//               name: 'IRlv',
//               component: IRlv
//             },
//             {
//               path: 'level/:id',
//               name: 'ISlv',
//               component: ISlv
//             },
//             {
//               path: 'level/:id',
//               name: 'IWlv',
//               component: IWlv
//             },
//             {
//               path: 'level/:id',
//               name: 'TLlv',
//               component: TLlv
//             },
//             {
//               path: 'level/:id',
//               name: 'TRlv',
//               component: TRlv
//             },
//             {
//               path: 'level/:id',
//               name: 'TSlv',
//               component: TSlv
//             },
//             {
//               path: 'level/:id',
//               name: 'TWlv',
//               component: TWlv
//             }
//           ]
//         },
//         {
//           path: 'listuser',
//           name: 'ListUser',
//           component: ListUser
//         },
//         {
//           path: 'rtest1',
//           name: 'Rtest1',
//           component: Rtest1
//         },
//         {
//           path: 'rtest2',
//           name: 'Rtest2',
//           component: Rtest2
//         },
//         {
//           path: 'rtest3',
//           name: 'Rtest3',
//           component: Rtest3
//         },
//         {
//           path: 'stest1',
//           name: 'Stest1',
//           component: Stest1
//         },
//         {
//           path: 'stest2',
//           name: 'Stest2',
//           component: Stest2
//         },
//         {
//           path: 'stest3',
//           name: 'Stest3',
//           component: Stest3
//         },
//         {
//           path: 'wtest1',
//           name: 'Wtest1',
//           component: Wtest1
//         },
//         {
//           path: 'wtest2',
//           name: 'Wtest2',
//           component: Wtest2
//         },
//         {
//           path: 'wtest3',
//           name: 'Wtest3',
//           component: Wtest3
//         },
//       ]
//     }
//   ]
// })
