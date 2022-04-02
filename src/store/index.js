import { createStore } from 'vuex'
import blogger from './modules/blogger.js'

export default createStore({
  state: {
    car: JSON.parse(localStorage.getItem('car')) || []
  },
  getters: {
    totalItems(state){
      return state.car.reduce( (sum, value) => (typeof value.quantity === 'number' ? sum + (value.quantity) : sum), 0 );
    },
    totalPrice(state){
      return state.car.reduce( (sum, value) => (typeof value.quantity === 'number' ? sum + (value.quantity * value.price) : sum), 0 );
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    blogger
  }
})
