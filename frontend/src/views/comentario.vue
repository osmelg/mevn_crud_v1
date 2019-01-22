<template>
  <div>
    <router-link to='/'>Volver</router-link>
    <!-- GET -->
      <p>{{comentarioError}}</p><hr>
      <form v-on:submit.prevent="putComentario">
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
// import router from "../router";
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
      .get('http://localhost:3000/api/comentario/'+this.$route.params.id)
      .then(response =>{
        this.comentario = response.data;
      })
      .catch(error=>{
        this.comentarioError = error;
        
      })
    },
    putComentario(){
      axios
      .put('http://localhost:3000/api/comentario/'+this.$route.params.id,this.comentario)
      .then(response=>{
        if(response.data.respuesta === 'comentarioActualizado'){
          console.log('comentarioActualizado');
          this.$router.push('/');
        }
      })
      .catch(error=>{
        alert(error);
      })
    },
    deleteComentario(id) {
      axios
        .delete("http://localhost:3000/api/comentario/"+id)
        .then(response => {
          if (response.data.respuesta === "comentarioEliminado") {
            this.$router.push('/');
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>
/* .comentario       {background: grey; margin-bottom: 2em; margin-top: 2em; width: 50%;} */
</style>

