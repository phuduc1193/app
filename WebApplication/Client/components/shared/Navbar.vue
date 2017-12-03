<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
      <router-link :to="{ name: 'home' }" class="navbar-brand">WebApplication</router-link>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'home' }" class="nav-link">
              Home <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="about" class="nav-link">
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="contact" class="nav-link">
              Contact
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'register-account' }" class="nav-link">
              Register
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'login-account' }" class="nav-link">
              Login
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>