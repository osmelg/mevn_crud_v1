<template>
    <div>
        <router-link to='/'>Volver</router-link>
        <h1>Crear un comentario</h1>
        <form v-on:submit.prevent="postComentario">
            <input type="text" v-model="titulo" placeholder="titulo"><br>
            <input type="text" v-model="comentario" placeholder="comentario"><br>
            <button>Crear</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            titulo:'',
            comentario:''
        }
    },
    methods:{
        postComentario(){
            axios
            .post('http://localhost:3000/crearcomentario',{
                titulo:this.titulo,
                comentario:this.comentario
            })
            .then(response =>{
                if(response.data.rs === 'comentarioCreado'){
                    alert('Comentario Creado');
                    this.$router.push('/');
                }
            })
            .catch(error=>{
                if(error.response.rs === 'crearComentarioError'){
                    alert('Error al crear comentario');
                }
            })
        }
    }
}
</script>

<style>

</style>
