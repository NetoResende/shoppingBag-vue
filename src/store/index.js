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
    loardBag( state, products){
      state.productsInBag = products
    },
    AddToBag( state, product){
      state.productsInBag.push(product)
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
    },
    RemoveFromBag( state, productId){
      const updatedBag = state.productsInBag.filter( item => productId != item.id)
      state.productsInBag = updatedBag
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
    }
  },
  actions: {
    loardProducts({ commit }){
        axios.get( "https://fakestoreapi.com/products")
        .then( response => {
          commit('loardProducts', response.data);
        })
    },
    loardBag({ commit }){

        if(localStorage.getItem('productsInBag')) {
          commit('loardBag', JSON.parse(localStorage.getItem('productsInBag')));
        }
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
