<script setup>
import { faker } from '@faker-js/faker';

const products = []

for (let index = 0; index < 21; index++) {
  const name = faker.commerce.product()
  const image = faker.image.urlPicsumPhotos()
  const price = faker.commerce.price({ max: 100, symbol: 'R$', dec: 0 })
  const description = faker.commerce.productDescription()

  const product = {
    name,
    image,
    price,
    description
  }

  products.push(product)
}

</script>


<template>
  <div class="container">
    <div class="product" v-for="product in products" :key="product.name">
      <img :src="product.image" />
      <div class="texts">
        <div class="name-description">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
        </div>
        <h2 class="price">{{ product.price }}</h2>
      </div>
    </div>
  </div>
</template>


<style  scoped>
.container {
  margin-top: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 3rem;
  width: 1024px;
}

.product {
  display: flex;
  flex-direction: row;
}

.texts {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}


img {
  width: 200px;
  height: 265px;
  object-fit: cover;
}

p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  font-size: 0.875rem;
}

@media(min-width: 768px) and (max-width: 1023px) {

  .container {
    grid-template-columns: 1fr 1fr;
    width: 90vw;
  }
}

@media(max-width: 767px) {
  .container {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    width: 90vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }

  .texts {
    margin-left: 0;
    font-size: 14px;
    width: inherit;
  }

  .name-description {
    flex-direction: column;
    width: inherit;
  }

}
</style>