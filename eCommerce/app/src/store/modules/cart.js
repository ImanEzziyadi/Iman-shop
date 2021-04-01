
export default {
  state: {
    cart: []
  },
  getters: {
    shoppingCart: state => {
      if(sessionStorage.getItem('cart') !== null) {
        state.cart = JSON.parse(sessionStorage.getItem('cart'))
      }
      return state.cart
    },
    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    },
    shoppingCartTotal: state => {
      let total = 0
      if(state.cart.length !== 0) {
        state.cart.forEach(item => {
          total += item.product.price * item.quantity
        })
      }
      return total
    }
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
       let exists = state.cart.find(item => item.product._id === product._id)
      if(exists) {
        exists.quantity += quantity
        return
      }

      state.cart.push({product, quantity})
    },
    DELETE_PRODUCT_FROM_CART: (state, id) => {
      state.cart = state.cart.filter(item => item.product._id !== id)
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
      console.log( state.cart)
     },
    DECREMENT_QUANTITY: (state, item) => {
      item.quantity -= 1
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    INCREMENT_QUANTITY: (state, {product, quantity}) => {
      let item = state.cart.find(i => i.product._id === product._id)
      item.quantity += Number(quantity)
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
  
    },
  

  },
  actions: {
    addProductToCart: ({commit}, { product, quantity }) => {
      commit('ADD_TO_CART', { product, quantity })
    },
    deleteProductFromCart: ({commit}, id) => {
      commit('DELETE_PRODUCT_FROM_CART', id)
    },
    incrementQuantity: ({commit}, item) => {
      let i = {
        ...item,
        quantity: 1
      }
      commit('INCREMENT_QUANTITY', i)
      console.log(item)
    },
    decrementQuantity: ({commit}, item) => {
      if(item.quantity <= 1) {
        commit('DELETE_PRODUCT_FROM_CART', item.product._id)
        return
      }
      commit('DECREMENT_QUANTITY', item)
    }
  }
  
}