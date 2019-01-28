<template>
    <div>
        <router-link to='/'>Volver</router-link>
<<<<<<< HEAD
        <h1>Crear un comentario</h1>
        <form v-on:submit.prevent="postComentario">
            <input type="text" v-model="titulo" placeholder="titulo"><br>
=======
        <h1>{{componenteTitulo}}</h1>
        <p>{{crearComentarioError}}</p><hr>
        <form v-on:submit.prevent="postComentario">
            <input type="text" v-model="titulo"  placeholder="titulo"><br>
>>>>>>> master
            <input type="text" v-model="comentario" placeholder="comentario"><br>
            <button>Crear</button>
        </form>
    </div>
</template>

<script>
<<<<<<< HEAD
import axios from "axios";
export default {
    data(){
        return{
=======
/* eslint-disable */
import axios from "axios";
import router from "../router";
export default {
    data(){
        return{
            componenteTitulo:'Crea un Blog Nuevo',
            crearComentarioError:'',
>>>>>>> master
            titulo:'',
            comentario:''
        }
    },
    methods:{
        postComentario(){
            axios
<<<<<<< HEAD
            .post('http://localhost:3000/crearcomentario',{
=======
            .post('http://localhost:3000/api/crearcomentario',{
>>>>>>> master
                titulo:this.titulo,
                comentario:this.comentario
            })
            .then(response =>{
<<<<<<< HEAD
                if(response.data.rs === 'comentarioCreado'){
                    alert('Comentario Creado');
                    this.$router.push('/');
                }
            })
            .catch(error=>{
                if(error.response.rs === 'crearComentarioError'){
                    alert('Error al crear comentario');
                }
=======
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
>>>>>>> master
            })
        }
    }
}
</script>

<style>

</style>
