<template>
  <div>
    <router-link to='/'>Volver</router-link>
<<<<<<< HEAD
      <p>{{comentarioError}}</p><hr>
      <form @submit.prevent="putComentario">
=======
    <!-- GET -->
      <p>{{comentarioError}}</p><hr>
      <form v-on:submit.prevent="putComentario">
>>>>>>> master
        <input type="text" v-model="comentario._id" disabled><br>
        <input type="text" v-model="comentario.titulo"><br>
        <input type="text" v-model="comentario.comentario"><br>
        <a href="" v-on:click.prevent="deleteComentario(comentario._id)">Eliminar</a>
        <button>Actualizar</button>
      </form>
  </div>
</template>

<script>
import axios from "axios";
<<<<<<< HEAD
=======
// import router from "../router";
>>>>>>> master
export default {
  data(){
    return{
      comentario:{},
      comentarioError:''
    }
  },
  created(){
    this.getUsuario();
  },
  methods:{
    getUsuario(){
      axios
<<<<<<< HEAD
      .get('http://localhost:3000/comentario/'+this.$route.params.id)
=======
      .get('http://localhost:3000/api/comentario/'+this.$route.params.id)
>>>>>>> master
      .then(response =>{
        this.comentario = response.data;
      })
      .catch(error=>{
<<<<<<< HEAD
        if(error.response.rs === 'getComentarioError'){
          this.comentarioError = 'Hubo un error al obtener el comentario';
        }
=======
        this.comentarioError = error;
        
>>>>>>> master
      })
    },
    putComentario(){
      axios
<<<<<<< HEAD
      .put('http://localhost:3000/comentario/'+this.$route.params.id,this.comentario)
      .then(response=>{
        if(response.data.rs === 'comentarioActualizado'){
=======
      .put('http://localhost:3000/api/comentario/'+this.$route.params.id,this.comentario)
      .then(response=>{
        if(response.data.respuesta === 'comentarioActualizado'){
          console.log('comentarioActualizado');
>>>>>>> master
          this.$router.push('/');
        }
      })
      .catch(error=>{
<<<<<<< HEAD
        if(error.response.rs === 'putComentarioError'){
          this.comentarioError = 'Hubo un error al actualizar el comentario';
        }
=======
        alert(error);
>>>>>>> master
      })
    },
    deleteComentario(id) {
      axios
<<<<<<< HEAD
        .delete("http://localhost:3000/comentario/"+id)
        .then(response => {
          if (response.data.rs === "comentarioEliminado") {
=======
        .delete("http://localhost:3000/api/comentario/"+id)
        .then(response => {
          if (response.data.respuesta === "comentarioEliminado") {
>>>>>>> master
            this.$router.push('/');
          }
        })
        .catch(function(error) {
<<<<<<< HEAD
          if(error.response.rs === 'deleteComentarioError'){
            this.comentarioError = 'Hubo un error al eliminar el comentario';
          }
=======
          console.log(error);
>>>>>>> master
        });
    }
  }
}
</script>

<style>
<<<<<<< HEAD
=======
/* .comentario       {background: grey; margin-bottom: 2em; margin-top: 2em; width: 50%;} */
>>>>>>> master
</style>

