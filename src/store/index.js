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
    },
    RemoveFromBag( state, productId){
      const updatedBag = state.productsInBag.filter( item => productId != item.id)
      state.productsInBag = updatedBag
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
    },
    RemoveFromBag( {commit}, productId){
      if( confirm("Deseja cancelar esta compra ?")) {

        commit('RemoveFromBag', productId)
      }
    }
  },
  modules: {
  }
})
