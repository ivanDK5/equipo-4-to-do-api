if(process.env.NODE_ENV!=='production'){
  require('dotenv').config();
}

const mongoose=require('mongoose');

//se agregan los modelos
require('./models/Tarea');
require('./models/Proyecto');

require('./models/Usuario');
require('./config/passport');
require('./models/Rol')
require('./models/Estatus')
require('./models/Tag')

const express = require('express');
const app = express();

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cdatabase connection

mongoose.connect(process.env.DB_URI);
mongoose.set('debug',true);

//Configurando las rutas
app.use('/v1', require('./routes'));
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
//Primero se crea un modelo,luego se crea un controlador, luego un route,luego se agrega al index