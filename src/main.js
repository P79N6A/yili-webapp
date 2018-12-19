// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import './assets/styles/resetfint.css'
import './assets/styles/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import Calendar from 'vue2-datepick'
import store from './vuex/store'
import axios from 'axios'
import Qs from 'qs'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Mint)
Vue.use(Calendar)
Vue.prototype.axios = axios
Vue.prototype.qs = Qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
