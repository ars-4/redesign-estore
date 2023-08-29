<template>
  <nav>
    <div class="navbar">
      <div class="left-side">
        <div class="brand">
          <h3 @click="$router.push('/')">Redesign</h3>
        </div>
        <div class="nav-links">
          <a href="#" class="nav-link">Analog</a>
          <a href="#" class="nav-link">Clothing</a>
          <a href="#" class="nav-link">Objects</a>
          <a href="#" class="nav-link">Gift Guide</a>
        </div>
      </div>
      <div class="right-side">
        <div class="form">
          <button class="btn btn-round">Shop Analog</button>
          <span class="icon icon-search"></span>
          <span class="icon icon-user" @click="toggle_user_data()"></span>
          <span @click="$router.push('/cart')" class="icon icon-cart-bag-outline"></span>
          <div class="user-data">
            <div v-if="$store.state.logged_in">
              <a @click="$router.push('/profile')" class="link-primary">Profile</a>
              <br>
              <a @click="logout()" class="link-danger">Logout</a>
            </div>
            <div v-else>
              <a @click="$router.push('profile/')" class="link-primary">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view />

  <div class="newsletter">
    <div class="content">
      <h4>Get the inside scoop</h4>
      <p>Sign up for new product drops, behind-the-scenes content, and monthly "5 Things I'm Digging" emails</p>
      <div class="form">
        <input type="text" class="form-control" placeholder="Enter your email">
        <button class="btn">See what we're digging →</button>
      </div>
    </div>
  </div>

  <span class="chat-bubble icon icon-chat-rounded-outline"></span>

  <div class="footer">
    <div class="row">
      <div class="col-md-2 customer-service">
        <span class="title">Customer Service</span>
        <a href="#">Help / FAQ</a>
        <a href="#">Returns & Exchanges</a>
        <a href="#">Sizing</a>
        <a href="#">Gift Cards</a>
        <a href="#">Contact Us</a>
      </div>
      <div class="col-md-2 about">
        <span class="title">About</span>
        <a href="#">Our Story</a>
        <a href="#">Shop</a>
        <a href="#">Journal</a>
        <a href="#">About our Tees</a>
        <a href="#">Reviews</a>
      </div>
      <div class="col-md-5"></div>
      <div class="col-md-3">
        <div class="row">
          <div class="col-md-8">
            <span class="rtl">© Redesign {{ new Date().getFullYear() }}</span>
            <!-- <br> -->
            <span class="rtl">All images and content may not be used without permission</span>
            <div class="rtl">
              <span class="icon icon-instagram"></span>
              &nbsp;
              <span class="icon icon-twitter"></span>
              &nbsp;
              <span class="icon icon-facebook"></span>
            </div>
          </div>
          <div class="col-md-4">
            <span class="logo-90deg">REDESIGN</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<style>
:root {
  --brown-dark: #221b1f;
  --brown-mid: #6b5e52;
  --brown-light: #aa9d8e;
  --mustard: #e4c892;
  --blue-light: #ced4cb;
  --blue-dark: #496375;
  --black: #0b0d11;
  --grey: #dfe4eb;
}

*,
body {
  padding: 0;
  margin: 0;
  font-family: 'Rubik';
}

.icon {
  cursor: pointer;
}

body {
  overflow-x: hidden;
}

/* Navigation Bar */
nav {
  padding: 20px 15px;
}

nav .navbar,
nav .navbar .left-side,
nav .navbar .left-side .nav-links,
nav .navbar .right-side {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .navbar .left-side .brand {
  padding: 0px 20px;
  margin: 0px 20px;
  cursor: pointer;
}

nav .navbar .left-side .nav-links a {
  font-size: 13px;
  text-decoration: none;
  color: var(--black);
  font-weight: bold;
}


nav .navbar .right-side {
  position: relative;
}

nav .navbar .right-side .form .btn {
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 14px;
  background-color: var(--blue-light);
  margin-right: 14px;
  border: 1px solid var(--black);
}

nav .navbar .right-side .form span {
  font-size: 13px;
  font-weight: bold;
  margin-right: 14px;
}

nav .navbar .right-side .icon {
  font-weight: bold;
  cursor: pointer;
}

nav .navbar .right-side .user-data {
  font-size: 12px;
  background-color: #fff;
  position: absolute;
  right: 10px;
  top: 30px;
  height: 0px;
  width: 80px;
  text-align: center;
  overflow: hidden;
}

nav .navbar .right-side .user-data a {
  text-underline-offset: 4px;
  padding: 10px 15px;
  cursor: pointer;
}


.newsletter {
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue-light);
  text-align: center;
}

.newsletter .content {
  width: 30%;
  margin: 5% 0px;
}

.newsletter .content .form {
  margin-top: 15%;
}

.newsletter .content .form .btn,
.newsletter .content .form input {
  border-radius: 0px;
}

.newsletter .content .form .btn {
  width: 100%;
  background-color: var(--black);
  color: var(--blue-light);
  margin-top: 8px;
}


.chat-bubble {
  background-color: var(--brown-dark);
  position: fixed;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  right: 2%;
  bottom: 5%;
  text-align: center;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  transform: rotateY(180deg);
}

.footer {
  background-color: #fff;
  padding: 60px;
  font-size: 12px;
}

.footer .customer-service a,
.footer .about a {
  text-decoration: none;
  color: var(--black);
  display: block;
}

.footer .title {
  font-weight: bold;
}

.footer .rtl {
  direction: rtl !important;
  display: block;
}

.footer .logo-90deg {
  position: absolute;
  transform: rotate(90deg) translate(20px, 45px);
  font-weight: bold;
  font-size: 20px;
  letter-spacing: -4px;
}



@media screen and (max-width:700px) {
  #app {
    display: none;
  }
  body::before {
    content: 'Please revisit the site on PC / Laptop / or Wide Screen';
    width: 100%;
    height: 300px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
}

</style>


<script>

import { defineComponent } from 'vue';
import AuthComponent from '@/components/AuthComponent.vue';

export default defineComponent({
  data() {
    return {
      is_logged_in: false
    }
  },

  methods: {

    check_login: function () {
      if (localStorage.getItem('token') != undefined) {
        this.$store.state.logged_in = true;
      } else {
        this.$store.state.logged_in = false;
      }
    },

    logout: function () {
      localStorage.removeItem('token');
      this.check_login();
      this.toggle_user_data();
    },

    toggle_user_data: function () {
      let user_data_modal = document.querySelector('.user-data');
      if (user_data_modal.style.height === "30px" || user_data_modal.style.height === " ") {
        user_data_modal.style.height = "0px";
      } else {
        user_data_modal.style.height = "30px";
      }
    },

  },


  beforeMount() {
    this.check_login();
  }

})

</script>