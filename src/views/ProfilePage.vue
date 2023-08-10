<template>
    <div class="auth-modal" v-if="$store.state.logged_in === false">
        <AuthComponent />
    </div>

    <div class="profile" v-else>
        <h1>Profile Page</h1>
    </div>
    <br>
</template>

<style>
.auth-modal {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script>

import { defineComponent } from 'vue';
import AuthComponent from '@/components/AuthComponent.vue';

export default defineComponent({

    data() {
        return {
            logged_in: false,
            user: {}
        }
    },

    components: {
        AuthComponent
    },

    methods: {
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
            })
            localStorage.setItem('token', 'dummy_token');
            this.check_login();
        },

        logout: function () {
            localStorage.removeItem('token');
            this.check_login();
        },
    },

    beforeMount() {
        this.check_login();
    }

})

</script>