// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
new Vue({
  el: '#learn1',
  data: {
    hours: new Date().getHours()
  }
})
// new Vue({
//   el: '#learn2',
//   data:{
//     path: location.pathname
//   }
// })
// new Vue({
//   el: '#learn3',
//   data:{
//     dog: ['Rot','Ret','Luki']
//   }
// })
// new Vue({
//   el: '#learn4',
//   data: {
//   user: "manh huy"
//   }
//   })
new Vue({
  el: '#learn5',
  data: {
    dogs: ['Rot', 'Ret', 'Luki']
  }
})
new Vue({
  el: '#learn6',
  data: {
    averageRent: {
      london: 1560,
      paris: 1730,
      NYC: 2000
    }
  }
})
new Vue({
  el: '#learn7'
})
new Vue({
  el: '#learn8',
  data: {
    // buttontype: 'submit'
    buttondisable: false
  }
})
new Vue({
  el: '#learn9',
  data: {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  },
  created () {
    setInterval(() => {
      this.seconds++
      if (this.seconds === 60) {
        this.seconds = 0
        this.minutes++
      }
      if (this.minutes === 60) {
        this.minutes = 0
        this.hours++
      }
      if (this.hours === 24) {
        this.hours = 0
      }
      if ((this.hours === 20) && (this.minutes === 0) && (this.seconds === 0)) {
        alert('1h nua chuan bi ve')
      }
      if ((this.hours === 21) && (this.minutes === 0) && (this.seconds === 0)) {
        alert('Go home !!!!!!!!!!!')
      }
    }, 1000)
  }
})
new Vue({
  el: '#learn10',
  data: {
    status: 2
  },
  methods: {
    statusFromId (id) {
      const status = ({
        0: 'Funny',
        1: 'Tire :((',
        2: 'Learning Vue'
      })[id]
      return status || 'Unknow status: ' + id
    }
  }
})
// new Vue({
//   el: '#learn11',
//   data: {
//     numbers: [-5, 0, 2, -1, 1, 0.5]
//   },
//   methos: {
//     filterPositive (numbers) {
//       return numbers.filterPositive((number) => number => 0)
//     }
//   }
// })
// new Vue({
//   el: '#learn12',
//   data: {
//     sum: 0,
//     i: 0,
//     numbers: [5, 8, 3]
//   },
//   computed: {
//     numberTotal () {
//       // while (this.numbers[this.i] !== null) {
//       //   this.sum = this.sum + this.numbers[this.i]
//       //   this.i = this.i + 1
//       // }
//       // return this.numbers.numberTotal()
//       return this.sum
//     }
//   }
// })
new Vue({
  el: '#learn13',
  data: {
    inputValue: '',
    oldInputValue: ''
  },
  watch: {
    inputValue () {
      const newValue = this.inputValue

      setTimeout(() => {
        this.oldInputValue = newValue
      }, 2000)
    }
  }
})
new Vue({
  el: '#learn14',
  data: {
    productOnecost: 501
  }
})
