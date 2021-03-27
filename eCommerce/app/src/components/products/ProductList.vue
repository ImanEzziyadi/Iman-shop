<template>
  <div class="row row-cols-1 row-cols-md-3">
    <product v-for="product in products" :key="product._id" :product="product" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Product from './Product'
export default {
  components: {
    Product
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style>

</style>