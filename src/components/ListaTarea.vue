<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorias</th>
      <th scope="col">Estado</th>
      <th scope="col">Numero</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="tarea in tareas" :key="tarea.id" >
      <th scope="row"> {{ tarea.id }} </th>
      <td> {{ tarea.nombre }}</td>
      <td> 
            <span v-for="(categoria,index) in tarea.categorias" :key="index">
              {{tarea.categorias.length === index +1 ? categoria : categoria+', '}}
            </span>
      </td>
      <td> {{ tarea.estado }} </td>
      <td> {{ tarea.numero }} </td>
      <td>
          <router-link class="btn btn-warning" :to="{name:'Editar', params:{id: tarea.id}}">Editar</router-link>
          <button class="btn btn-danger btn-md" @click="deleteTareas(tarea.id)">eliminar</button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['deleteTareas'])
    }

}
</script>
