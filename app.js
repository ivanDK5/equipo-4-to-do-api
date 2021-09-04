// Express
const express = require('express');
const app = express();

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configurando las rutas
app.use('/v1', require('./routes'));

//Primero se crea un modelo,luego se crea un controlador, luego un route,luego se agrega al index