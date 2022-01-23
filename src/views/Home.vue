<template>
  <form ref="formulario" @submit.prevent="procesarFormulario">
    <Input :tarea="tarea"/>
  </form>
  <hr>
  <lista-tarea/>
</template>

<script>
import Input from '../components/Input.vue'
import { mapActions } from 'vuex'
import ListaTarea from '../components/ListaTarea.vue';
const shortId = require('shortid');
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Input,
    ListaTarea
    
  },
  data(){
    return{
      tarea:{
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods:{
    ...mapActions(['setTareas']),
    procesarFormulario() {
      console.log(this.tarea)
      if (this.tarea.nombre.trim() === "") {
        console.log ('Campo nombre vacio')
        return
      }
      this.tarea.id = shortId.generate();
      this.setTareas(this.tarea);
      console.log('enviando formulario...')
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
      // this.$refs.formulario.reset(); limpia el formulario pero no limpia el this.tarea
      
    }
  }

}
</script>
