const Usuario= require('../models/Usuario');


function mostrarUsuarios(req, res){
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
  mostrarUsuarios,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario
}