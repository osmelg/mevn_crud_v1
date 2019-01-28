<template>
<<<<<<< HEAD
  <div>
    <h1>Mevn Crud V1</h1>
    <router-link to='/crearcomentario'>Crear Comentario</router-link><hr>
    <comentarios></comentarios>
=======
<!-- eslint-disable  -->
  <div class="home">
    <h3>{{titulo}}</h3>
    <router-link to='/api/crearcomentario'>Crear Comentario</router-link><hr>
    <!-- GET -->
      <p>{{comentarioError}}</p>
      <div class="usuarios" v-for="comentario of comentarios" :key="comentario._id">
        <h2>ID: {{comentario._id}}</h2>
        <h3>NOMBRE: {{comentario.titulo}}</h3>
        <h4>EMAIL: {{comentario.comentario}}</h4>
        <router-link :to="{name:'comentario',params:{id:comentario._id}}">Actualizar</router-link><br>
      </div>
>>>>>>> master
  </div>
</template>

<script>
<<<<<<< HEAD
import comentarios from '../components/comentarios.vue';
export default {
  components:{'comentarios':comentarios},
  data(){
    return({
    })
  },
  methods:{
=======
/* eslint-disable */
import axios from "axios";
import router from "../router";

export default {
  name: 'home',
  data(){
    return({
      titulo:'CRUD - M(mongodb) e(express) v(vuejs) n(nodejs)',
      comentarios:[],
      comentarioError:''
    })
  },
  created(){
    this.getComentarios();
  },
  methods:{
    getComentarios(){
      axios 
      .get('http://localhost:3000/api/comentarios')
      .then(response =>{
        this.comentarios = response.data;
      })
      .catch(error =>{
        this.comentariosError = 'Hubo un error al obtener los usuarios';
      })
    }
>>>>>>> master
  }
}
</script>

<<<<<<< HEAD
<style>

=======
<style scoped>
/* *               {margin: 0; padding: 0; font-size: 10px;} */
.home           {text-align: center; font-family: 'Helvetica';}
.usuarios       {background: grey; margin-bottom: 2em; margin-top: 2em; width: 50%;}
>>>>>>> master
</style>
