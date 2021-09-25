const mongoose = require('mongoose')
const Estatus = mongoose.model('Estatus')

//CRUD
function crearEstatus(req, res, next) {
    var estatus = new Estatus(req.body)
    estatus.save().then(estatus => {
        res.status(200).send(estatus)
    }).catch(next)
}

function obtenerEstatus(req, res, next) {
    if (req.params.id) {
        Estatus.findById(req.params.id).then(estatus => {
            res.send(estatus)
        }).catch(next)
    } else {
        Estatus.find().then(estatus => {
            res.send(estatus)
        }).catch(next)
    }
}

function modificarEstatus(req, res, next) {
    Estatus.findById(req.params.id).then(estatus => {
        if (!estatus) { return res.sendStatus(401); }
        let nuevaInfo = req.body
        if (typeof nuevaInfo.nombre !== 'undefined')
            estatus.nombre = nuevaInfo.nombre
        if (typeof nuevaInfo.descripcion !== 'undefined')
            estatus.descripcion = nuevaInfo.descripcion
        if (typeof nuevaInfo.fechaAlta !== 'undefined')
            estatus.fechaAlta = nuevaInfo.fechaAlta
        if (typeof nuevaInfo.fechaBaja !== 'undefined')
            estatus.fechaBaja = nuevaInfo.fechaBaja
        estatus.save().then(updated => {
            res.status(201).json(updated.publicData())
        }).catch(next)
    }).catch(next)
}

function eliminarEstatus(req, res, next) {
    Estatus.findOneAndDelete({ _id: req.params.id }).then(r => {
        res.status(200).send(`El estatus ${req.params.id} se eliminó: ${r}`);
    })
}

module.exports = {
    crearEstatus,
    obtenerEstatus,
    modificarEstatus,
    eliminarEstatus,
}



