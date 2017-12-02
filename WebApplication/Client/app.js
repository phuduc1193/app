import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter)

const app = new Vue(App).$mount('#app');