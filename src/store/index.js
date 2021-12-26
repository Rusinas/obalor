import Vue from 'vue'
import Vuex from 'vuex'
import CartStore from '@/store/Cart.store'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart: CartStore
  }
})
