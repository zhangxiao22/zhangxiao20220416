import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import LazyLoad from './directive/LazyLoad.js'
const defaultImg = require('./assets/default-img.png')
Vue.use(LazyLoad, {
  default: defaultImg
})
new Vue({
  render: h => h(App),
}).$mount('#app')
