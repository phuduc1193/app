<style scoped>
  .view-content {
    padding-top: 5em;
  }
</style>

<template>
  <div>
    <navbar></navbar>
    <b-container class="view-content">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
  import VueRouter from 'vue-router'

  import Navbar from './shared/Navbar.vue'
  import Hello from './home/Hello.vue'
  import RegisterAccount from './account/Register.vue'
  import LoginAccount from './account/Login.vue'

  const router = new VueRouter({
    routes: [
      { name: 'home', path: '/', component: Hello },
      { name: 'register-account', path: '/Account/Register', component: RegisterAccount },
      { name: 'login-account', path: '/Account/Login', component: LoginAccount },
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