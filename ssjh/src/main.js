// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import qs from 'qs'
import 'es6-promise/auto'
import router from './router'
import VueResource from 'vue-resource'
import store from './store/index'
import 'jquery'
Vue.use(VueResource) ;
Vue.config.productionTip = false ;
Vue.prototype.$ajax = axios ;
Vue.prototype.$qs=qs ;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
