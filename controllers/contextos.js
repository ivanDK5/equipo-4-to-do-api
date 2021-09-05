const Contexto = require('../models/Contexto')

//CRUD
function crearContexto(req,res){
    var Contexto= new Contexto(req.body);
    res.status(200).send(Contexto);
}

function obtenerContexto(req,res){
    var Contexto1 = new Contexto(1,"Casa","Actividades a realizar en casa","05/Sep/2021")// en este ejemplo se da de alta nuevo Contexto
    var Contexto2 = new Contexto(2,"Ocio","Tareas o actividades a realizar en tiempo libre","05/Sep/2021")// en este ejemplo se da de alta nuevo Contexto
    res.send([Contexto1,Contexto2])
}

function modificarContexto(req,res){
    var Contexto = new Contexto(req.params.id)//aquí se colocan los parámetros a modificar
    var modificaciones = req.body
    Contexto = {...Contexto,...modificaciones}
    res.send(Contexto)
}

function eliminarContexto(req,res){
    res.status(200).send(`El Contexto ${req.params.id} se eliminó`)
}

module.exports = {
    crearContexto,
    obtenerContexto,
    modificarContexto,
    eliminarContexto,
}

