<template>
  <div class="cart-item">
    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img :src="item.product.image" alt="" class="img-fluid image-width">
        <div>
          <div><strong>{{ item.product.name }}</strong></div>
          <div><small>{{ item.quantity }} x {{ item.product.price }}</small></div>
        </div>
      </div>
      <div>
        <div class="btn-group btn-group-sm me-2" role="group" area-label="quantity">
          <button class="btn btn-dark" @click.stop="decrementQuantity(item)">-</button>
          <button class="btn btn-dark" @click.stop="incrementQuantity(item)">+</button>
        </div>
        <button class="btn btn-danger btn-sm " @click.stop="deleteProductFromCart(item.product._id)"><i class="fas fa-trash"></i></button>
      </div>
    </div>
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['item'],
   methods: {
    ...mapActions(['deleteProductFromCart', 'incrementQuantity', 'decrementQuantity'])
  }

}
</script>

<style scoped>
  .image-width {
    width: 90px;
  }
</style>