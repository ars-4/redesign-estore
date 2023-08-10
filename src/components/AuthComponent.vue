<template>
    <div class="auth">

        
        <div class="login" v-if="status==='login'">
            <h3>Login</h3>
            <div class="form">
                <input type="text" class="form-control" placeholder="Email" v-model="user.email">
                <br>
                <input type="text" class="form-control" placeholder="Password" v-model="user.password">
                <br>
                <button class="btn btn-dark" @click="login()">Login</button>
                &nbsp;
                <button class="btn btn-secondary" @click="toggle_form_status">Register</button>
            </div>
        </div>

        <div class="register" v-else>
            <h3>Register</h3>
            <div class="form">
                <input type="text" class="form-control" placeholder="Email">
                <br>
                <div class="row">
                    <div class="col-6">
                        <input type="text" class="form-control" placeholder="First Name">
                    </div>
                    <div class="col-6">
                        <input type="text" class="form-control" placeholder="Last Name">
                    </div>
                </div>
                <br>
                <input type="text" class="form-control" placeholder="Password">
                <br>
                <input type="text" class="form-control" placeholder="Confirm Password">
                <br>
                <input type="text" class="form-control" placeholder="Address, City, Country">
                <br>
                <button class="btn btn-dark" @click="toggle_form_status()">Login</button>
                &nbsp;
                <button class="btn btn-secondary">Register</button>
            </div>
        </div>


    </div>
</template>

<style>
.auth {
    width: 25%;
    text-align: center;
}


</style>

<script>

import { defineComponent } from 'vue';

export default defineComponent({

    data() {
        return {
            status: 'login',
            user: {}
        }
    },

    methods: {
        toggle_form_status: function() {
            if(this.status === 'login') {
                this.status = 'reg'
            } else {
                this.status = 'login'
            }
        },

        check_login: function () {
            if (localStorage.getItem('token') != undefined && localStorage.getItem('token').length > 10) {
                this.$store.state.logged_in = true;
            } else {
                this.$store.state.logged_in = false;
            }
        },

        login: function () {
            fetch(`${this.api}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.user)
            }).then(res => {return res.json()}).then(data => {
                localStorage.setItem('token', data['token']);
            })
            this.check_login();
        },

        logout: function () {
            localStorage.removeItem('token');
            this.check_login();
        },
    }

})

</script>