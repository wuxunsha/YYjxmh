import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action.js'
import * as mutations from './mutation.js'

Vue.use(Vuex)

console.log('store/index.js>>>>', mutations)

const state = {
  loginUser: {}
}
export default new Vuex.Store({
  state,
  actions: actions,
  mutations: mutations.default
})
