
export default {
  state: {
    cart: []

  },
  getters: {
    shoppingCart: state => {
      return state.cart
    },
    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    }
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      let exists = state.cart.find(item => item.product.id === product.id)
      if(exists) {
        exists.quantity += quantity
        return
      }
      state.cart.push({product, quantity})
    }
  },
  actions: {
    addProductToCart: ({commit}, { product, quantity }) => {
      commit('ADD_TO_CART', { product, quantity })
    }
  }
}