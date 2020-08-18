'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar archivos de rutas
var Project_routes = require('./routes/project');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//Rutas

app.use('/api',Project_routes);

// app.get('/',(req,res) => {
//     res.status(200).send(
//         "<h1>Hola mundo desde el API de NodeJs<h1>"
//     );
// });

// app.post('/test/:id',(req,res) => {
//     console.log(req.body.nombre);
//     console.log(req.params.id);
//     console.log(req.query.web);
//     res.status(200).send({
//         message:"Hola mundo desde el API de NodeJs"
//     });
// });

//Exportar
module.exports = app;
