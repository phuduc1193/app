<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from 'vue-router'

import Navbar from './shared/Navbar.vue'
import Hello from './home/Hello.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: Hello },
  ]
})

export default {
  name: 'app',
  router,
  components: {
    Navbar,
    Hello,
  }
}
</script>