// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import $ from 'jquery'
import './assets/css/perfect-scrollbar.min.css'
import './assets/css/material-design-iconic-font.min.css'
import './assets/select2/select2.min.css'
import './assets/css/app.css'

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['halo'] = '666'
// axios.defaults.headers.config['Access-Control-Allow-Origin'] = '*'

// 顺序不能变, 先 VueAxios, 再 axios. 否则报错找不到方法
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
