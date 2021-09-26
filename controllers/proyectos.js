const mongoose = require('mongoose')
const Proyecto = mongoose.model('Proyecto')

function crearProyecto(req, res, next)
{
          var proyecto = new Proyecto(req.body);
          proyecto.save().then(proyectito =>{
              res.status(200).send(proyectito)
          }).catch(next)
}

function consultarListaProyecto(req, res, next){
    
         //.populate({path:'contexto',select:'nombre descripcion id:_id'})
    Proyecto.find().populate({path:'estatus',select:'nombre descripcion id:_id'})
    .populate({path:'tag',select:'nombre descripcion id:_id'})
          .then(proyecto=>{
            proyecto=proyecto.map(proyecto=>{
              const {paths}=proyecto;
              proyecto=proyecto.publicData();
              proyecto.paths=paths;
              return proyecto;
            })
            res.status(200).send(proyecto)
          })
          .catch(next);

}

function editarProyecto(req, res, next)
{    
    //.populate({path:'contexto',select:'nombre descripcion id:_id'})
    Proyecto.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}).populate({path:'estatus',select:'descripcion nombre id:_id'})
    .populate({path:'tag',select:'nombre descripcion id:_id'})
   .then(proyecto=>{
   if(!proyecto){
     return res.status(404).send({status:'404',
     type:'Forbidden',
     msj:'No se encontro registro'
   })
   }
   const {paths}=proyecto;
   proyecto=proyecto.publicData();
   proyecto.paths=paths;
   proyecto.msj='Proyecto modificado';
   return res.status(200).json(proyecto);
 }).catch(next)
}

function eliminarProyecto(req, res, next){
    Proyecto.findOneAndDelete({_id:req.params.id})
	.then(r => {res.status(200).send("El proyecto se eliminó.")})
	.catch(next)
}

function asignarTareas(req, res, next){}

function recibirProyecto(req, res, next){}


module.exports =
{
    crearProyecto,
    consultarListaProyecto,
    editarProyecto,
    eliminarProyecto,
    asignarTareas,
    recibirProyecto
}
