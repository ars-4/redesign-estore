<template>
    <div class="product">

        <div class="details">
            <span class="path">Shop / Arrivals / The Analog Complete Kit</span>
            <div class="row">
                <div class="col-md-6">
                    <div class="container">
                        <div class="selected_image">
                            <img src="" alt="">
                        </div>
                        <div class="carousel row">
                            <div class="col-2"><img src="" alt=""></div>
                            <div class="col-2"><img src="" alt=""></div>
                            <div class="col-2"><img src="" alt=""></div>
                            <div class="col-2"><img src="" alt=""></div>
                            <div class="col-2"><img src="" alt=""></div>
                            <div class="col-2"><img src="" alt=""></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="details">
                        <h1>The Analog Complete Kit</h1>
                        <div class="price">
                            <span class="old_price">$172.00</span>
                            &nbsp;
                            <span class="new_price">$162.00</span>
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
                            <button class="btn" @click="add_to_cart">Add to cart - $162.00</button>
                            <span class="text-center">Free Pakistan Shipping $150.00</span>
                        </div>
                        <div class="info">
                            <span>The Ultimate Analog Kit.</span>
                            <br>
                            <span>This bundle includes:</span>
                            <ul>
                                <li><a href="#">A Tie (Red)</a></li>
                                <li><a href="#">A Dress Shirt (Polo)</a></li>
                                <li><a href="#">Leather Wallet (Brown)</a></li>
                                <li><a href="#">Redesign Special</a></li>
                            </ul>
                            <div class="info-detail">
                                <span class="title">Meet Analog: </span>
                                <span>The Simplest Productivity System. Analog is a physical companion for your
                                    digital tools. That helps you priortize and focus on your most important tasks.
                                </span>
                            </div>

                            <div class="accordions" @click="expand_accordion($event)">
                                <div class="accordion">
                                    <span class="summary">→ Details</span>
                                    <span class="details">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere consequuntur
                                        dicta accusamus nam consequatur obcaecati! Iure atque, ut sint autem quaerat minima
                                        facilis aliquid illo natus debitis velit neque?
                                    </span>
                                </div>
                                <div class="accordion">
                                    <span class="summary">→ Details</span>
                                    <span class="details">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere consequuntur
                                        dicta accusamus nam consequatur obcaecati! Iure atque, ut sint autem quaerat minima
                                        facilis aliquid illo natus debitis velit neque?
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
        }
    }
})

</script>