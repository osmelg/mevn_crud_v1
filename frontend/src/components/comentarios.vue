<template>
  <div class="home">
      <p>{{comentarioError}}</p>
      <div class="usuarios" v-for="comentario of comentarios" :key="comentario._id">
        <h2>ID: {{comentario._id}}</h2>
        <h3>Titulo: {{comentario.titulo}}</h3>
        <h4>Comentario: {{comentario.comentario}}</h4>
        <router-link :to="{name:'comentario',params:{id:comentario._id}}">Actualizar</router-link><br>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return({
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
      .get('http://localhost:3000/comentarios')
      .then(response =>{
        this.comentarios = response.data;
      })
      .catch(error =>{
        if(error.response.data.rs === 'getComentariosError'){
          this.comentarioError = 'Hubo un error al obtener los comentarios';
        }
      })
    }
  }
}
</script>

<style>
.home           {text-align: center; font-family: 'Helvetica';}
.usuarios       {background: grey; margin-bottom: 2em; margin-top: 2em; width: 50%;}
</style>
