import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productsInBag: []
    
  },
  mutations: {
    loardProducts( state, products){
      state.products = products
    },
    AddToBag( state, product){
      state.productsInBag.push(product)
    }
  },
  actions: {
    loardProducts({ commit }){
        axios.get( "https://fakestoreapi.com/products")
        .then( response => {
          commit('loardProducts', response.data);
        })
    },
    AddToBag( {commit}, product){
      commit('AddToBag', product)
    }
  },
  modules: {
  }
})
