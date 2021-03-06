// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';


require('bootstrap/dist/css/bootstrap.min.css');

Vue.config.productionTip = false;

window.axios = axios;


Vue.use(VueIziToast);

window.eventHub = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App />'
})

