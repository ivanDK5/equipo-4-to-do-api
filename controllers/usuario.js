const Usuario= require('../models/Usuario');


function crearUsuario(req, res){
  res.send('crearUsuario');
}

function obtenerUsuarios(req, res){
  res.send('obtenerUsuario');
}

function editarUsuario(req, res){
  res.send('editarUsuario');
}

function eliminarUsuario(req, res){
  res.send('eliminarUsuario');
}

module.exports={
  crearUsuario,
  obtenerUsuarios,
  editarUsuario,
  eliminarUsuario
}