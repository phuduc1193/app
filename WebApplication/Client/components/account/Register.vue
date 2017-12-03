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
    <b-card title="Sign Up"
            sub-title="We would love to have you with us!"
            class="col-8 m-auto">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group label="Username:">
          <b-form-input type="text" name="username"
                        v-model="form.Username"
                        placeholder="Enter username"
                        v-validate="{ required: true, regex: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/i }">
          </b-form-input>
          <b-alert class="mt-2" variant="light" :show="errors.has('username')">
            {{ errors.first('username') }}
          </b-alert>
        </b-form-group>
        <b-form-group label="Email address:"
                      description="We'll never share your email with anyone else.">
          <b-form-input type="email" name="email"
                        v-model="form.Email"
                        placeholder="Enter email"
                        v-validate="'required|email'">
          </b-form-input>
          <b-alert class="mt-2" variant="light" :show="errors.has('email')">
            {{ errors.first('email') }}
          </b-alert>
        </b-form-group>
        <b-form-group label="Password:">
          <b-form-input type="password" name="password"
                        v-model="form.Password"
                        placeholder="Enter password"
                        v-validate="{ required: true, regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/ }">
          </b-form-input>
          <b-alert class="mt-2" variant="light" :show="errors.has('password')">
            {{ errors.first('password') }}
          </b-alert>
        </b-form-group>
        <b-form-group label="Confirm Password:">
          <b-form-input type="password" name="confirm"
                        v-model="form.ConfirmPassword"
                        placeholder="Enter confirm password"
                        v-validate="'required|confirmed:password'"
                        data-vv-as="password">
          </b-form-input>
          <b-alert class="mt-2" variant="light" :show="errors.has('confirm')">
            {{ errors.first('confirm') }}
          </b-alert>
        </b-form-group>
        <b-row>
          <b-col lg="6">
            <b-button variant="primary" class="card-link" type="submit">Sign Up</b-button>
            <b-button class="card-link" type="reset">Reset Form</b-button>
          </b-col>
          <b-col lg="6" class="text-lg-right pt-2">
            <b-link :to="{ name: 'login-account' }">Already has an account?</b-link>
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
          Email: '',
          Password: '',
          ConfirmPassword: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        var vmForm = this.form
        const vm = this
        evt.preventDefault()
        this.$validator
          .validateAll()
          .then(function (valid) {
            // Validation success if valid === true
            if (!valid) return

            Vue.http.post('/Account/Register', vmForm).then(response => {
              // get body data
              window.location.href = '/'
            }, response => {
              // error callback
              response.body.forEach((err) => {
                vm.$alertify.error(err.code.replace(/([a-z])([A-Z])/g, '$1 $2'))
              })
            })
          })
      },
      onReset(evt) {
        evt.preventDefault();
        // Reset our form values
        this.form.Username = '';
        this.form.Email = '';
        this.form.Password = '';
        this.form.ConfirmPassword = '';
        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => { this.show = true });
      }
    }
  }
</script>
