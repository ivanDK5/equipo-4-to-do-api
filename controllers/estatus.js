const Estatus = require('../models/Estatus')

//CRUD
function crearEstatus(req,res){
    var Estatus= new Estatus(req.body);
    res.status(200).send(Estatus);
}

function obtenerEstatus(req,res){
    var Estatus1 = new Estatus(1,"Activo","Actividades a realizar en casa","05/Sep/2021")// en este ejemplo se da de alta nuevo Estatus
    var Estatus2 = new Estatus(2,"Ocio","Tareas o actividades a realizar en tiempo libre","05/Sep/2021")// en este ejemplo se da de alta nuevo Estatus
    res.send([Estatus1,Estatus2])
}

function modificarEstatus(req,res){
    var Estatus = new Estatus(req.params.id)//aquí se colocan los parámetros a modificar
    var modificaciones = req.body
    Estatus = {...Estatus,...modificaciones}
    res.send(Estatus)
}

function eliminarEstatus(req,res){
    res.status(200).send(`El Estatus ${req.params.id} se eliminó`)
}

module.exports = {
    crearEstatus,
    obtenerEstatus,
    modificarEstatus,
    eliminarEstatus,
}

