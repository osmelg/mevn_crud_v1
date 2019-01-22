<template>
    <div>
        <router-link to='/'>Volver</router-link>
        <h1>{{componenteTitulo}}</h1>
        <p>{{crearComentarioError}}</p><hr>
        <form v-on:submit.prevent="postComentario">
            <input type="text" v-model="titulo"  placeholder="titulo"><br>
            <input type="text" v-model="comentario" placeholder="comentario"><br>
            <button>Crear</button>
        </form>
    </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import router from "../router";
export default {
    data(){
        return{
            componenteTitulo:'Crea un Blog Nuevo',
            crearComentarioError:'',
            titulo:'',
            comentario:''
        }
    },
    methods:{
        postComentario(){
            axios
            .post('http://localhost:3000/api/crearcomentario',{
                titulo:this.titulo,
                comentario:this.comentario
            })
            .then(response =>{
                if(response.data.respuesta === 'comentarioCreado'){
                    //refresca la pag
                    // this.$router.go('/');
                    //ir a pagina
                    this.$router.push('/');
                    // agregar token al localStorage
                    // localStorage.setItem('token', JSON.stringify(this.todos));
                    // const token = localStorage.setItem('token', response.data.message.token);
                    // console.log(token);
                }
            })
            .catch(error=>{
                alert(error);
            })
        }
    }
}
</script>

<style>

</style>
