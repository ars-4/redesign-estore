<template>
    <div class="product">

        <div class="details">
            <span class="path">Shop / Arrivals / {{ $router.currentRoute['fullPath'] }}</span>
            <div class="row">
                <div class="col-md-6">
                    <div class="container">
                        <div class="selected_image">
                            <img :src="image" alt="Selected Image">
                        </div>
                        <div class="carousel row">
                            <div class="col-2" v-for="img in this.product.images" :key="img"><img :src="img.image" @click="select_image($event)" :alt="img.title"></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="details">
                        <h1>{{ this.product.title }}</h1>
                        <div class="price">
                            <span class="old_price">${{ Number(this.product.old_price).toFixed(2) }}</span>
                            &nbsp;
                            <span class="new_price">${{ Number(this.product.price).toFixed(2) }}</span>
                        </div>
                        <div class="rating">
                            <div class="stars">
                                <span class="icon-star-full"></span>
                                <span class="icon-star-full"></span>
                                <span class="icon-star-full"></span>
                                <span class="icon-star-half"></span>
                                <span class="icon-star-empty"></span>
                            </div>
                            <a href="#">209 reviews</a>
                        </div>
                        <hr>
                        <div class="add_to_cart">
                            <button class="btn" @click="add_to_cart">Add to cart - ${{ (Number(this.product.price) + Number(this.product.shipping_price)).toFixed(2) }}</button>
                            <span class="text-center">Free Pakistan Shipping ${{ Number(this.product.price).toFixed(2) }}</span>
                        </div>
                        <div class="info">
                            <span>The Ultimate {{ this.product.title }}. <b>({{ this.product.category[0].title }})</b></span>
                            <br>
                            <span>This bundle includes:</span>
                            <ul>
                                <li v-for="item in this.product.bundle" :key="item"><a href="#">{{ item.title }}</a></li>
                            </ul>
                            <div class="info-detail">
                                <span class="title">Description: </span>
                                <span>{{ this.product.description }}</span>
                            </div>

                            <div class="accordions" @click="expand_accordion($event)">
                                <div class="accordion" v-for="question in faqs" :key="question">
                                    <span class="summary">→ {{ question.question }}</span>
                                    <span class="details">
                                        {{ question.answer }}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
.product .details {
    background-color: var(--grey);
    padding: 60px 20px;
    position: relative;
    padding-left: 15%;
    padding-right: 15%;
}

.product .details .path {
    font-size: 12px;
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
}

.product .details .container {
    padding: 20px 40px;
}

.product .details .container .selected_image {
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product .details .container .selected_image img {
    width: 90%;
    aspect-ratio: 1/1;
    border: 1px solid #000;
}

.product .details .container .carousel {
    width: 100%;
    height: 100px;
    margin-left: 1%;
}

.product .details .container .carousel .col-2 {
    height: 100%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product .details .container .carousel .col-2 img {
    width: 100%;
    aspect-ratio: 1/1;
    border: 1px solid var(--black);
}


.product .details .details {
    padding: 0px 15px;
    margin-top: 30px;
}
.product .details .details h1 {
    margin: 0;
    padding: 0;
    font-size: 24px;
}
.product .details .details .price{
    font-size: 12px;
    font-weight: bold;
}
.product .details .details .price .old_price {
    text-decoration: line-through;
}
.product .details .details .price .new_price {
    color: var(--bs-danger);
}
.product .details .rating {
    display: flex;
}
.product .details .rating .stars {
    margin-right: 8px;
}

.product .details .rating .stars .star {
    margin-right: 2px;
}
.product .details .rating .stars .icon-star-full,
.product .details .rating .stars .icon-star-half,
.product .details .rating .stars .icon-star-empty {
    color: yellow;
    text-shadow: 2px 2px 2px #000;
}
.product .details .rating a {
    color: var(--black);
    font-size: 13px;
    padding-top: 2px;
    text-underline-offset: 4px;
}

.product .details .add_to_cart .btn {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 8px;
    font-size: 12px;
    padding: 14px;
    border-radius: 18px;
    background-color: var(--black);
    color: var(--grey);
}
.product .details .add_to_cart span {
    display: block;
    font-size: 12px;
    cursor: pointer;
}

.product .details .info {
    margin-top: 14px;
    font-size: 13px;
}
.product .details .info a {
    color: var(--black);
    text-underline-offset: 4px;
    font-size: 12px;
}
.product .details .info .info-detail {
    margin: 8px 0px;
}

.product .details .info .accordions {
    margin-top: 14px;
    border-bottom: 1px solid var(--black);
}
.product .details .info .accordions .accordion {
    border-top: 1px solid var(--black);
    padding: 8px 0px;
    width: 100%;
    height: 40px;
    display: block;
    overflow: hidden;
    transition: 0.5s;
}
.product .details .info .accordions .accordion.active {
    height: 140px !important;
    transition: 0.5s;
}
.product .details .info .accordions .accordion .summary {
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
}
</style>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    data() {return{
        product: {},
        faqs: [],
        image: "",
    }},
    methods: {
        expand_accordion: function(e) {
            let element = e.target.parentElement;
            if(element.classList.contains('active')) {
                element.classList.remove('active');
            } else {
                element.classList.add('active');
            }
        },

        add_to_cart: function() {
            this.$store.commit('add_item', {id:Number(this.$route.params.id), qty:1, title:'The Analog Complete Set', price:162});
        },

        select_image: function(e){
            this.image = e.target.src;
        },

        get_faqs: async function(){
            await fetch(`${this.$api}/faqs/${this.$route.params.id}`).then(res=>{return res.json()}).then(
                data => {
                    this.faqs = data;
                }
            )
        },

        get_product: async function() {
            await fetch(`${this.$api}/products/${this.$route.params.id}`).then(res=>{return res.json()}).then(
                data => {
                    this.product = data;
                    this.image = data.images[0].image;
                    this.get_faqs();
                }
            )
        },

    },

    created() {
        this.$watch(() => this.$route.params, (toParams, previousParams) => { this.get_product(); })
    },

    beforeMount() {
        this.get_product();
    }
})

</script>