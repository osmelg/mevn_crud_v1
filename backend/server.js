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
                res.send('bienvenido al mevn_crud_v1');
            })
        // GET 
            app.get('/comentarios',(req,res)=>{
                Comentarios.find({})
                    .exec(function(error,comentarios){
                        if(error){
                            res.json({rs:'getComentariosError'});
                        }else{
                            res.json(comentarios);
                        }
                    })
            })
        // GET ONE
            app.get('/comentario/:id',function(req,res){
                Comentarios.findOne({
                    _id:req.params.id
                })
                .exec(function(error,comentario){
                    if(error){
                        res.json({rs:'getComentarioError'});
                    }
                    else{
                        res.json(comentario);
                    }
                })
            })
        // POST
            app.post('/crearcomentario', (req, res) => {
                const comentario = new Comentarios();
                    comentario.titulo = req.body.titulo;
                    comentario.comentario = req.body.comentario;
                    comentario.save(function (error) {
                        if (error) {
                            res.json({rs:'crearComentarioError'});
                        } else {
                            res.json({rs: 'comentarioCreado'});
                        }
                    })
            }) 
        // PUT 
            app.put('/comentario/:id',(req,res)=>{
                Comentarios.findOneAndUpdate({
                    _id:req.params.id
                },
                {$set:{titulo:req.body.titulo,comentario:req.body.comentario}},{ upsert: true },function(error,comentarioActualizado){
                    if(error){
                        res.json({rs:'putComentarioError'});
                    }else{
                        res.json({rs:'comentarioActualizado'});
                    }
                })
            })
        // DELETE 
            app.delete('/comentario/:id',(req,res)=>{
                Comentarios.findOneAndDelete({
                    _id:req.params.id
                },(error,comentarioEliminado)=>{
                    if(error){
                        res.json({rs:'deleteComentarioError'});
                    }else{
                        res.json({rs:'comentarioEliminado'})
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

