const mongoose = require('mongoose')
const Contexto = mongoose.model('Contexto')

//CRUD
function crearContexto(req, res, next) {
    var contexto = new Contexto(req.body)
    contexto.save().then(contexto => {
        res.status(200).send(contexto)
    }).catch(next)
}

function obtenerContexto(req, res, next) {
    if (req.params.id) {
        Contexto.findById(req.params.id).then(contexto => {
            res.send(contexto)
        }).catch(next)
    } else {
        Contexto.find().then(contexto => {
            res.send(contexto)
        }).catch(next)
    }
}

function modificarContexto(req, res, next) {
    Contexto.findById(req.params.id).then(contexto => {
        if (!contexto) { return res.sendStatus(401); }
        let nuevaInfo = req.body
        if (typeof nuevaInfo.nombre !== 'undefined')
            contexto.nombre = nuevaInfo.nombre
        if (typeof nuevaInfo.descripcion !== 'undefined')
            contexto.descripcion = nuevaInfo.descripcion
        if (typeof nuevaInfo.fechaAlta !== 'undefined')
            contexto.fechaAlta = nuevaInfo.fechaAlta
        if (typeof nuevaInfo.fechaBaja !== 'undefined')
            contexto.fechaBaja = nuevaInfo.fechaBaja
        contexto.save().then(updated => {
            res.status(201).json(updated.publicData())
        }).catch(next)
    }).catch(next)
}

function eliminarContexto(req, res, next) {
    Contexto.findOneAndDelete({ _id: req.params.id }).then(r => {
        res.status(200).send(`El contexto ${req.params.id} se eliminó: ${r}`);
    })
}

module.exports = {
    crearContexto,
    obtenerContexto,
    modificarContexto,
    eliminarContexto
}

