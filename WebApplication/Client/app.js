import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import VueAlertify from 'vue-alertify';
import VueResource from 'vue-resource';

try {
  window.$ = window.jQuery = require('jquery');
  window.Popper = require('popper.js').default;
  require('bootstrap');
} catch (e) { }

import BootstrapVue from 'bootstrap-vue';

import App from './components/App.vue';

// import styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(VueAlertify);
Vue.use(VueResource);

function readCookie(name) {
  name += '=';
  for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--)
    if (!ca[i].indexOf(name))
      return ca[i].replace(name, '');
}

Vue.http.interceptors.push((request, next) => {
  request.headers.set('X-XSRF-TOKEN', readCookie('XSRF-TOKEN'));
  next();
});

const app = new Vue(App).$mount('#app');

$(document).ready(function () {
    $('#loading-wrapper').remove();
});