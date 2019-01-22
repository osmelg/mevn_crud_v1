// Llamado de modulos
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const mongoose = require('mongoose');
    const Comentarios = require('./models/Comentarios.model');
    const express = require('express');
// Inicializamos express
    var app = express();
// Levantando el servidor
    app.listen('3000',() =>{
        console.log('servidor inicializado...');
    })
// Llamando a los middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(cors());
// Rutas
    // CRUD
        // Home
            app.get('/',(req,res) =>{
                res.send('Bienvenido al Back End de el Mevn Crud');
            })
        // GET 
            app.get('/api/comentarios',(req,res)=>{
                Comentarios.find({})
                    .exec(function(error,comentarios){
                        if(error){
                            res.json({respuesta:'getComentariosError'});
                        }else{
                            res.json(comentarios);
                        }
                    })
            })
        // GET ONE
            app.get('/api/comentario/:id',function(req,res){
                Comentarios.findOne({
                    _id:req.params.id
                })
                .exec(function(error,comentario){
                    if(error){
                        res.json({respuesta:'getComentarioError'});
                    }
                    else{
                        res.json(comentario);
                    }
                })
            })
        // POST
            app.post('/api/crearcomentario', (req, res) => {
                const comentario = new Comentarios();
                    comentario.titulo = req.body.titulo;
                    comentario.comentario = req.body.comentario;
                    comentario.save(function (error) {
                        if (error) {
                            res.json({respuesta:'postComentarioError'});
                        } else {
                            res.json({respuesta: 'comentarioCreado'});
                        }
                    })
            }) 
        // PUT 
            app.put('/api/comentario/:id',(req,res)=>{
                Comentarios.findOneAndUpdate({
                    _id:req.params.id
                },
                {$set:{titulo:req.body.titulo,comentario:req.body.comentario}},{ upsert: true },function(error,comentarioActualizado){
                    if(error){
                        res.json({respuesta:'putComentarioError'});
                    }else{
                        res.json({respuesta:'comentarioActualizado'});
                    }
                })
            })
        // DELETE 
            app.delete('/api/comentario/:id',(req,res)=>{
                Comentarios.findOneAndDelete({
                    _id:req.params.id
                },(error,comentarioEliminado)=>{
                    if(error){
                        res.json({respuesta:'deleteComentarioEliminado'});
                    }else{
                        res.json({respuesta:'comentarioEliminado'})
                    }
                })
            }) 
// Mongoose
    mongoose.connect('mongodb://localhost/mevncrud',{useNewUrlParser:true},(error)=>{
        if(error){
            throw error;
        }else{
            console.log('conectado a mongoDB');
        }
    })

