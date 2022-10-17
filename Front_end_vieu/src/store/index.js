import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    barriosInfo: []
  },
  getters: {
    getBarriosInfo(state){
      return state.barriosInfo
    }
  },
  mutations: {
    getBarrios(state, barrios){
      state.barriosInfo = barrios
      console.log(state.barriosInfo)
    }
  },
  actions: {
    async obtenerBarrios({ commit }){
      const barrios = await axios.get('http://localhost:3000/results').then(response => response.data).catch((error) => console.log(error));
      commit('getBarrios', barrios)
    }
  },
  modules: {
  }
})
