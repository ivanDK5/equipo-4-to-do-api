const mongoose = require("mongoose")
const Tag = mongoose.model("Tag")

//CRUD
function crearTag(req, res, next){
    var tag = new Tag(req.body)
        tag.save().then(tag => {
        res.status(200).send(tag)
      }).catch(next)
  }

  function obtenerTag(req, res, next){
    if(req.params.id){
      Tag.findById(req.params.id).then(tag => {
          res.send(tag)
        }).catch(next)
    } else {
      Tag.find().then(tag => {
        res.send(tag)
      }).catch(next)
    }
  }

  function modificarTag(req, res,next){
    Tag.findById(req.params.id).then(tag => {
       if (!tag) { return res.sendStatus(401); }
       let nuevaInfo = req.body
       if (typeof nuevaInfo.nombre !== 'undefined')
         tag.nombre = nuevaInfo.nombre
       if (typeof nuevaInfo.descripcion !== 'undefined')
         tag.descripcion = nuevaInfo.descripcion
       if (typeof nuevaInfo.fechaAlta !== 'undefined')
         tag.fechaAlta = nuevaInfo.fechaAlta
       if (typeof nuevaInfo.fechaBaja !== 'undefined')
         tag.fechaBaja = nuevaInfo.fechaBaja
       tag.save().then(updated => {                                   
         res.status(201).json(updated.publicData())
       }).catch(next)
     }).catch(next)
 }

 function eliminarTag(req, res, next){
    Tag.findOneAndDelete({ _id: req.params.id }).then(r => {
        res.status(200).send(`El tag ${req.params.id} se eliminó: ${r}`);
      })
  }

module.exports = {
    crearTag,
    obtenerTag,
    modificarTag,
    eliminarTag,
}