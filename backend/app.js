'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// carar archivos de rutas
var project_routes = require('./routes/project');

// middlewares - métodos que se ejecutan antes de la acción de un controlador
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); // estos son para convertir los datos que lleguen en json

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // en vez del * iría la url permitida de la app
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/api', project_routes);

// exportar
module.exports = app;
