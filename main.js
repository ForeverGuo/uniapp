import App from './App'
import Vue from 'vue'
import store from '@/store/index.js'

import uView from 'uview-ui'
Vue.use(uView)

const app = new Vue({
	store,
  ...App
})
app.$mount()
