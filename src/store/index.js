import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas : [],
    tarea:{
      id: 'id',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    set(state, payload){
      state.tareas.push(payload)
      console.log('tarea guardad en el estado/tienda')
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
    },
    tarea(state, payload){
      const tarea = state.tareas.find(item => item.id === payload);
      if (!tarea){
        router.push('/')
        return
      }
      state.tarea = tarea;
      
    },
    update(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/')
    }
  },
  actions: {
    setTareas({commit}, tarea){
      commit('set', tarea);
    },
    deleteTareas({commit}, id){
      commit('eliminar', id)
    },
    setTarea({commit}, tarea){
      commit('tarea', tarea)
    },
    updateTarea({commit}, tarea) {
      commit('update', tarea)
    }
  },
  modules: {
  }
})
