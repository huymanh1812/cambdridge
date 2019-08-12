import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from "./components/Admin"
import Listening from "./components/view admin/type/Listening"
import Reading from "./components/view admin/type/Reading"
import Speaking from "./components/view admin/type/Speaking"
import Writing from "./components/view admin/type/Writing"
import ListUser from "./components/view admin/ListUser"
import ListTest from "./components/view admin/ListTest"
import ListQuestion from "./components/view admin/ListQuestion"

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
          component: ListQuestion
        },
        {
          path: 'list_test',
          name: 'illv',
          component: ListTest,
        },
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
