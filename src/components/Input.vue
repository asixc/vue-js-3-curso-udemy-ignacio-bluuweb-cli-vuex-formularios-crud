<template>
  <input type="text"
      class="form-control my-2"
      placeholder="Ingrese su nombre"
      v-model.trim="tarea.nombre"
    >
    <div class="form-check form-check-inline">
      <input 
        type="checkbox" 
        name="" 
        id="check-1"
        class="form-check-input"
        v-model="tarea.categorias"
        value="javascript"
      >
      <label for="check-1" class="form-check-label">JavaScript</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="checkbox" 
        name="" 
        id="check-2"
        class="form-check-input"
        v-model="tarea.categorias"
        value="nodejs"
      >
      <label for="check-2" class="form-check-label">NodeJs</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="checkbox" 
        name="" 
        id="check-3"
        class="form-check-input"
        v-model="tarea.categorias"
        value="php"
      >
      <label for="check-3" class="form-check-label">PHP</label>
    </div>


  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="customRadioInline1" name="customRadioInline" class="custom-control-input" value="urgente" v-model="tarea.estado">
    <label class="custom-control-label" for="customRadioInline1">Urgente</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="customRadioInline2" name="customRadioInline" class="custom-control-input" value="no-urgente" v-model="tarea.estado">
    <label class="custom-control-label" for="customRadioInline2">No urgente</label>
  </div>
  <div class="mt-2">
    <input type="number" class="form-control" v-model.number="tarea.numero">
  </div>

  <button 
    class="btn btn-dark mt-5 btn-block" 
    type="submit"
    :disabled="bloquear"
    >
    Enviar
  </button>
</template>

<script>
export default {
    name: 'Input',
    props: {
        tarea: Object
    },
    computed: {
        bloquear() {
            return this.tarea.nombre.trim() === "" ? true : false
        }
    }    
}
</script>

