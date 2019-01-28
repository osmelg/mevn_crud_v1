<template>
  <div>
    <h1>Mevn Crud V1</h1>
    <router-link to='/crearcomentario'>Crear Comentario</router-link><hr>
    <comentarios></comentarios>
  </div>
</template>

<script>
import comentarios from '../components/comentarios.vue';
export default {
  components:{'comentarios':comentarios},
  data(){
    return({
    })
  },
  methods:{
  }
}
</script>

<style>

</style>
