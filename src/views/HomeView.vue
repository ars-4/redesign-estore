<template>
  <div class="home">

    <div class="header">
      <div class="content">
        <h1>Redesign Your Lifestyle</h1>
        <button class="btn btn-round">Explore More Now →</button>
      </div>
    </div>

    <div class="catalogue">
      <div class="filters" @click="switch_filter($event)">
        <span class="filter active">Best Sellers</span>
        <span class="filter">Holiday Bundles</span>
        <span class="filter">New Arrivals</span>
        <span class="filter">Analog</span>
        <span class="filter">Objects</span>
      </div>
      <div class="products">
        <div class="row">
          <div class="col-md-3" v-for="product in products" :key="product">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
      <div class="more-btn">
        <button class="text-center btn btn-products">Browse All Products →</button>
      </div>
      <br>
    </div>

    <div class="specials">
      <div class="content">
        <h2>Most favourited and specials on the list</h2>

        <div class="container">
          <h1>Super Fabric</h1>
        </div>
        <a href="#">Browse more in the category →</a>

        <div class="container">
          <h1>Super Fabric</h1>
        </div>
        <a href="#">Browse more in the category →</a>

        <div class="container">
          <h1>Super Fabric</h1>
        </div>
        <a href="#">Browse more in the category →</a>

      </div>
    </div>


    <div class="special">
      <div class="content row">
        <div class="col-md-4">
          <h1>Rice Bowls For Charity</h1>
          <p>For every item purchases through December 31st, we'll donate a meal to needy kids around the world.</p>
          <a href="#">Learn about Rice Bowls →</a>
        </div>
        <div class="col-md-8">
          <img :src="container_image">
        </div>
      </div>
    </div>

  </div>
</template>


<style>
.home .header {
  width: 100%;
  height: 560px;
  background-image: url('../assets/images/white_coat.jpg');
  background-size: cover;
  /* background-attachment: fixed; */
  background-position: center;
  position: relative;
}

.home .header .content {
  position: absolute;
  bottom: 20%;
  left: 10%;
  color: #fff;
  font-size: 24px;
}

.home .header .content .btn {
  background-color: var(--mustard);
  border-radius: 18px;
  border: 2px solid var(--black);
}

.home .catalogue {
  margin-left: 15%;
  margin-right: 15%;
  padding: 20px 5px;
}

.home .catalogue .filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  color: var(--black);
  pointer-events: none;
}

.home .catalogue .filters>* {
  opacity: 1;
  transition: 0.5s;
  pointer-events: auto;
  cursor: pointer;
}

.home .catalogue .filters:hover>* {
  opacity: 0.5;
  transition: 0.5s;
  pointer-events: auto;
  cursor: pointer;
}

.home .catalogue .filters:hover>*:hover,
.home .catalogue .filters .filter.active {
  opacity: 1;
  transition: 0.5s;
  text-decoration: underline;
  text-underline-offset: 10px;
}

.home .catalogue .more-btn {
  display: flex;
  justify-content: center;
}

.home .catalogue .btn-products {
  font-weight: bold;
  text-align: center !important;
  border-radius: 18px;
  font-size: 14px;
  background-color: var(--mustard);
  border: 2px solid var(--black);
}


.specials {
  background-color: var(--brown-light);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 10px;
}

.specials .content {
  width: 80%;
}

.specials .content .container {
  width: 100%;
  aspect-ratio: 7/1;
  margin-top: 30px;
  border: 1px solid var(--black);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-image: url('../assets/images/black_leather.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  overflow: hidden;
}

.specials .content .container h1 {
  color: #fff;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  margin-left: -1%;
  padding: 60px;
}

.specials .content a {
  text-align: left !important;
  color: var(--black);
  font-size: 12px;
  text-underline-offset: 4px;
}


.special {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
}
.special a {
  color: var(--black);
  text-underline-offset: 4px;
}

.special .content {
  width: 75%;
  background: linear-gradient(to right, var(--blue-light), #fff);
}

.special .content img {
  width: 100%;
  aspect-ratio: 2/1;
}

.special .content .col-md-4 {
  padding: 35px;
}
</style>


<script>

import { defineComponent } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import container_image from '@/assets/images/white_coat.jpg';
import demo_product_image from '@/assets/images/red_design.jpg';

export default defineComponent({

  components: {
    ProductCard
  },

  data() {
    return {
      container_image: container_image,
      products: [
        { id: 0, title: 'The Analog Complete Set', badge: 'latest', image: demo_product_image, old_price: 179, new_price: 162 },
        { id: 1, title: 'The Analog Complete Set', badge: 'latest', image: demo_product_image, old_price: 179, new_price: 162 }
      ]
    }
  },

  methods: {
    switch_filter: function (e) {
      let filters = document.getElementsByClassName('filter');
      for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove('active');
      }
      e.target.classList.add('active');
    },

    get_products: async function() {
      this.products = []
      await fetch(`${this.$api}/products/`).then(res=>{
        return res.json()
      }).then((data)=>{
        for(let item of data) {
          // console.log(item[0].image)
          let obj = {
            id: item.id,
            title: item.title,
            badge: item.badge,
            image: item.images[0].image,
            old_price: Number(item.old_price),
            new_price: Number(item.total_price)
          }
          this.products.push(obj)
        }
      })
    }

  },

  beforeMount() {
    this.get_products()
  }

})

</script>


