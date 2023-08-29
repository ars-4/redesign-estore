<template>
    <div class="auth-modal" v-if="$store.state.logged_in === false">
        <AuthComponent />
    </div>

    <div class="profile" v-else>

        <div class="header">
            <h1>My Profile</h1>
            <span v-if="!loadingData">Balance: {{Number(user.personal_data.coins).toFixed(2)}}$</span>
        </div>

        <div class="body" v-if="!loadingData">

            <div class="personal">
                <div class="row">
                    <div class="col-md-6">
                        <span class="form-control">{{ `${user.personal_data.first_name} ${user.personal_data.last_name}`
                        }}</span>
                    </div>
                    <div class="col-md-6">
                        <span class="form-control" style="overflow:hidden">{{ user.personal_data.user }}</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <span class="form-control">{{ `${user.personal_data.street}, ${user.personal_data.city},
                                                    ${user.personal_data.country}` }}</span>
                    </div>
                    <div class="col-md-6">
                        <!-- <span class="form-control">Full Name</span> -->
                    </div>
                </div>


                <div class="row order">
                    <div class="col-md-12">
                        <div class="form-control">
                            <div>
                                <span class="larger">Last Order</span>
                                <br>
                                <span class="smaller">{{ user.order.date_created.split('T')[0] }}</span>
                            </div>
                            <hr>
                            <div class="small">
                                <span class="product" v-for="product in user.order.cart.cart_products" :key="product">{{
                                    `${product.quantity} ${product.product.title} ${product.price}` }}</span>
                            </div>
                            <hr>
                            <div class="small">
                                <span>Total: {{ Number(user.order.cart.total_price).toFixed(2) }} $$</span>
                                <br>
                                <span>Payment Type: {{ user.order.payment_type }}</span>
                                <br>
                                <span>Status: {{ user.order.delivery_status }}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
    <br>
</template>

<style>
.smaller {
    font-size: 13px;
}
.auth-modal {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile .header {
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--mustard);
}

.profile .body {
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile .body .personal {
    width: 50%;
}

.profile .body .personal .row .form-control {
    margin: 4px 4px;
}

</style>

<script>

import { defineComponent } from 'vue';
import AuthComponent from '@/components/AuthComponent.vue';

export default defineComponent({

    data() {
        return {
            logged_in: false,
            user: {},
            loadingData: true
        }
    },

    components: {
        AuthComponent
    },

    methods: {
        check_login: async function () {
            if (localStorage.getItem('token') != undefined && localStorage.getItem('token').length > 10) {
                this.$store.state.logged_in = true;
                await this.get_profile();
                this.loadingData = false;
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

        get_profile: async function () {
            await fetch(`${this.$api}/profile/`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            }).then(res => { return res.json() }).then(data => {
                this.user = data;
            }).catch(err => {
                console.log(err);
            })
        }

    },

    beforeMount() {
        this.check_login();
    }

})

</script>