  
import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/product'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    user
  }
})