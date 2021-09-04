const Usuario= require('../models/Usuario');


function crearUsuario(req, res){
  return 'lista de usuarios';
}

function obtenerUsuario(req, res){
  return 'obtenerUsuario';
}

function editarUsuario(req, res){
  return 'editarUsuario';
}

function eliminarUsuario(req, res){
  return 'eliminar usuario';
}

module.exports={
  crearUsuario,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario
}