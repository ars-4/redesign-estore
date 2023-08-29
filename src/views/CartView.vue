<template>
    <div class="cart">
        <div class="row">
            <div class="col-md-6">
                <div class="payment" v-if="$store.state.logged_in">
                    <div class="options">
                        <div class="option">
                            <label for="payoneer" @click="set_payment_option($event)">
                                <input type="radio" name="payment_option" id="payoneer" value="payoneer" class="radio">
                                Payoneer
                            </label>
                            <div class="payoneer-payment" v-if="payment=='payoneer'">
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Payoneer Email">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="option">
                            <label for="card" @click="set_payment_option($event)">
                                <input type="radio" name="payment_option" id="card" value="card" class="radio">
                                Card Payment
                            </label>
                            <div class="master-card-payment" v-if="payment=='card'">
                                <div class="mastercard"></div>
                                <br>
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" placeholder="Card Holder Name" class="form-control">
                                        <br>
                                        <input type="number" placeholder="Card-Number" class="form-control">
                                    </div>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-3"><input type="month" placeholder="Expiry" class="form-control"></div>
                                    <div class="col-3"><input type="number" placeholder="CVV" class="form-control"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-8">
                            <input type="text" class="form-control" placeholder="Address, City (or Postal Code), Country">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-4">
                            <button class="btn btn-dark" @click="create_order()">Submit</button>
                        </div>
                    </div>
                </div>
                <div class="login" v-else>
                    <h4>Please Login<br>To Add Your Order</h4>
                </div>
            </div>

            <div class="col-md-6">
                <div class="items">
                    <div class="row headings">
                        <div class="col-2">
                            <span>#</span>
                        </div>
                        <div class="col-4">
                            <span>Item</span>
                        </div>
                        <div class="col-2">
                            <span>Qty</span>
                        </div>
                        <div class="col-2">
                            <span>Price</span>
                        </div>
                        <div class="col-2">
                            <span>Remove</span>
                        </div>
                    </div>
                    <div class="row item" v-for="item in cart" :key="item.id">
                        <div class="col-2"><span>{{ item.id }}</span></div>
                        <div class="col-4"><span>{{ item.title }}</span></div>
                        <div class="col-2"><span>{{ item.qty }}</span></div>
                        <div class="col-2"><span>${{ (item.price * item.qty).toFixed(2) }}</span></div>
                        <div class="col-2"><span class="icon" @click="remove_cart_item(item.id)">&times;</span></div>
                    </div>
                    <div class="row totals">
                        <div class="col-2"><span>Total</span></div>
                        <div class="col-4"><span>-</span></div>
                        <div class="col-2"><span>{{ totals.qty }}</span></div>
                        <div class="col-2"><span>${{ totals.price.toFixed(2) }}</span></div>
                        <div class="col-2">-</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.cart {
    background-color: var(--mustard);
    padding: 60px 60px;
}

.cart .items {
    padding: 0px 20px;
    font-size: 13px;
}

.cart .items .headings {
    border-bottom: 2px solid var(--black);
}

.cart .items .headings .col-2:first-child,
.cart .items .item .col-2:first-child,
.cart .items .totals .col-2:first-child {
    border-right: 2px solid var(--black);
}

.cart .items .headings,
.cart .items .totals {
    font-weight: bold;
}

.cart .items .totals {
    border-top: 2px solid var(--black);
}
</style>


<script>

import { defineComponent } from 'vue';

export default defineComponent({

    data() {
        return {
            payment: 'null'
        }
    },

    methods: {
        remove_cart_item: function (item) {
            this.$store.commit('remove_item', Number(item))
        },
        check_login: function () {
            if (localStorage.getItem('token') != undefined) {
                this.$store.state.logged_in = true;
            } else {
                this.$store.state.logged_in = false;
            }
        },
        set_payment_option: function(e) {
            this.payment = e.target.value;
        },

        create_order: async function() {
            let order = {
                products: this.$store.state.items,
                total: this.totals.price,
                payment: this.payment
            }
            if(this.payment === 'null') { alert('Please Select Payment Option'); }
            else {
                await fetch(`${this.$api}/cart/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(order)
            }).then(res => {return res.json()}).then(data => {
                console.log(data);
            }).catch(err => {
                console.log(err);
            })
            }
        }

    },

    computed: {
        cart() {
            return this.$store.state.items;
        },
        totals() {
            let qty = 0;
            let price = 0;
            for (let i = 0; i < this.$store.state.items.length; i++) {
                qty += this.$store.state.items[i].qty;
                price += (this.$store.state.items[i].price * this.$store.state.items[i].qty);
            }
            return { price, qty }
        }
    },

    beforeMount() {
        this.check_login();
    }

});

</script>