<template>
<div class="col mb-4">
    <div class="card h-100 p-3">
      <img
        :src="product.image"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.short }}</p>

      </div>
    <router-link :to="{name: 'ProductDetails', params: {id: product._id}}" type="button" class="btn btn-secondary">Show Product</router-link> 
    </div>
  </div>
</template>

<script>







export default {
  name: 'Product',
  props: ['product']
}
</script>

<style>

</style>