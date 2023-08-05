<template>
    <div class="product_card">
        <div class="container">
            <img :src="product.image" alt="">
            <span class="badge" v-if="product.badge">{{ product.badge.toUpperCase() }}</span>
            <div class="info">
                <button class="btn btn-round" @click="$router.push(`/product/${product.id}`)">Read More</button>
                &nbsp;
                <button class="btn btn-round" @click="add_to_cart"><span class="icon icon-cart"></span></button>
            </div>
        </div>
        <div class="content">
            <div class="title">
                <p>{{ product.title }}</p>
            </div>
            <div class="price">
                <span class="old">${{ product.old_price.toFixed(2) }}</span>
                &nbsp;
                <span class="new">${{ product.new_price.toFixed(2) }}</span>
            </div>
        </div>
    </div>
</template>


<style>
.product_card {
    margin: 12px;
    width: 100%;
    aspect-ratio: 1/1.5;
    cursor: pointer;
}

.product_card .container {
    position: relative;
    padding: 0;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 1/1.2;
    border-radius: 4px;
}
.product_card .container img {
    width: 100%;
    transition: 0.5s;
    aspect-ratio: 1/1.2;
}
.product_card .container:hover img {
    transition: 0.5s;
    opacity: 0.5;
    filter: blur(5px);
}
.product_card .container .badge {
    position: absolute;
    font-size: 10px;
    padding: 4px 8px;
    top: 5%;
    left: 5%;
    background-color: var(--blue-light);
    color: var(--black);
    border-radius: 14px;
}
.product_card .container .info {
    position: absolute;
    top: 45%;
    left: 20%;
    display: flex;
    opacity: 0;
    transition: 0.5s;
}
.product_card .container .info .btn-round {
    border-radius: 4px;
    font-size: 12px;
    border: 2px solid var(--black);
    background-color: var(--mustard);
    padding: 5px 8px;
}
.product_card .container .info .icon {
    font-weight: bolder;
}
.product_card .container:hover .info {
    opacity: 1;
    transition: 0.5s;
}


.product_card .content {
    padding: 8px 8px;
    font-size: 13px;
    font-weight: bold;
}

.product_card .content p {
    padding: 0;
    margin: 0;
}

.product_card .content .price {
    font-size: 10px;
}

.product_card .content .price .old {
    color: var(--bs-secondary);
    text-decoration: line-through;
}

.product_card .content .price .new {
    color: var(--bs-danger);
}
</style>


<script>

import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        product: Object
    },

    methods: {
        add_to_cart: function() {
            this.$store.commit('add_item', {id:Number(this.product.id), qty:1, title:this.product.title, price:this.product.new_price});
            // console.log(`${this.product.id} pushed in cart`);
        }
    }
});

</script>