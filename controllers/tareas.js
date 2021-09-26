const mongoose = require('mongoose');
const Tarea = mongoose.model('Tarea');

function crearTarea(req, res, next){
     var tarea = new Tarea(req.body);
	tarea.save().then(tareita =>{
		res.status(200).send(tareita)
	}).catch(next)
}

function consultarListaTareas(req, res, next){
          Tarea.find().populate({path:'proyecto',select:'nombre descripcion id:_id'})
          .populate({path:'tag',select:'nombre descripcion id:_id'})
          .populate({path:'estatus',select:'nombre descripcion id:_id'})
         //.populate({path:'contexto',select:'nombre descripcion id:_id'})
          .then(tarea=>{
               tarea=tarea.map(tarea=>{
              const {paths}=tarea;
              tarea=tarea.publicData();
              tarea.paths=paths;
              return tarea;
            })
            res.status(200).send(tarea)
          })
          .catch(next);
}

function editarTarea(req, res, next){
     Tarea.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}).populate({path:'proyecto',select:'descripcion nombre id:_id'})
     .populate({path:'estatus',select:'nombre descripcion id:_id'})
     .populate({path:'tag',select:'nombre descripcion id:_id'})
     //.populate({path:'contexto',select:'nombre descripcion id:_id'})
    .then(tarea=>{
    if(!tarea){
      return res.status(404).send({status:'404',
      type:'Forbidden',
      msj:'No se encontro registro'
    })
    }

    const {paths}=tarea;
    tarea=tarea.publicData();
    tarea.paths=paths;
    tarea.msj='Tarea modificada';
    return res.status(200).json(tarea);
  }).catch(next)
}

function eliminarTarea(req, res, next){
     Tarea.findOneAndDelete({_id:req.params.id})
	.then(r => {res.status(200).send("La tarea se eliminó.")})
	.catch(next)    
}
 

module.exports =
{
     crearTarea,
     consultarListaTareas,
     editarTarea,
     eliminarTarea
}