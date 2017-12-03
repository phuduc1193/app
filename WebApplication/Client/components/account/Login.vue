<style scoped>
  .alert {
    margin-bottom: 0;
    padding: 0.5rem;
    font-size: small;
  }

  .form-group {
    margin-bottom: 0;
  }

    .form-group:last-of-type {
      margin-bottom: 1.5rem;
    }
</style>

<template>
  <div>
    <b-card title="Login"
            class="col-8 m-auto">
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group label="Username:">
          <b-form-input type="text" name="username"
                        v-model="form.Username"
                        placeholder="Enter username">
          </b-form-input>
        </b-form-group>
        <b-form-group label="Password:">
          <b-form-input type="password" name="password"
                        v-model="form.Password"
                        placeholder="Enter password">
          </b-form-input>
        </b-form-group>
        <b-form-group class="pt-2">
          <b-form-checkbox v-model="form.RememberMe">
            Remember me?
          </b-form-checkbox>
        </b-form-group>
        <b-row>
          <b-col lg="6">
            <b-button variant="primary" class="card-link" type="submit">Login</b-button>
          </b-col>
          <b-col lg="6" class="text-lg-right pt-2">
            <b-link :to="{ name: 'register-account' }">Don't have an account yet?</b-link>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    data() {
      return {
        form: {
          Username: '',
          Password: ''
        },
        show: true
      }
    },
    created() {
      Vue.http.get('/Account/Login')
    },
    methods: {
      onSubmit(evt) {
        var vmForm = this.form
        const vm = this
        evt.preventDefault()
        Vue.http.post('/Account/Login', vmForm).then(response => {
          // get body data
          window.location.href = '/'
        }, response => {
          // error callback
          vm.$alertify.error(response.body)
        })
      }
    }
  }
</script>
