<template>
  <div>
    <router-link to='/'>Volver</router-link>
      <p>{{comentarioError}}</p><hr>
      <form @submit.prevent="putComentario">
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
      .get('http://localhost:3000/comentario/'+this.$route.params.id)
      .then(response =>{
        this.comentario = response.data;
      })
      .catch(error=>{
        if(error.response.rs === 'getComentarioError'){
          this.comentarioError = 'Hubo un error al obtener el comentario';
        }
      })
    },
    putComentario(){
      axios
      .put('http://localhost:3000/comentario/'+this.$route.params.id,this.comentario)
      .then(response=>{
        if(response.data.rs === 'comentarioActualizado'){
          this.$router.push('/');
        }
      })
      .catch(error=>{
        if(error.response.rs === 'putComentarioError'){
          this.comentarioError = 'Hubo un error al actualizar el comentario';
        }
      })
    },
    deleteComentario(id) {
      axios
        .delete("http://localhost:3000/comentario/"+id)
        .then(response => {
          if (response.data.rs === "comentarioEliminado") {
            this.$router.push('/');
          }
        })
        .catch(function(error) {
          if(error.response.rs === 'deleteComentarioError'){
            this.comentarioError = 'Hubo un error al eliminar el comentario';
          }
        });
    }
  }
}
</script>

<style>
</style>

