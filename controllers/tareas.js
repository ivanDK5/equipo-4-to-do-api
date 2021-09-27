const mongoose = require('mongoose');
const Tarea = mongoose.model('Tarea');

function crearTarea(req, res, next){
     var tarea = new Tarea(req.body);
	tarea.save().then(tareita =>{
		res.status(200).send(tareita)
	}).catch(next)
}

//.populate({path:'contexto',select:'nombre descripcion id:_id'})
function consultarTareas(req, res, next){

     if(req.query){
   
          Tarea.find().populate({path:'proyecto',select:'nombre descripcion id:_id'})
          .populate({path:'tag',select:'nombre descripcion id:_id'})
          .populate({path:'estatus',select:'nombre descripcion id:_id'})
          .then(tarea=>{console.log(req.query);
             
              if(req.query){
               titulo=req.query.titulo;
                if(titulo){
                  tarea=tarea.filter(tarea=>{return tarea.titulo===titulo});
                }
                descripcion=req.query.descripcion;
                if(descripcion){
                    tarea=tarea.filter(tarea=>{return tarea.descripcion===descripcion});
                }
                notes=req.query.notes;
                if(notes){
                    tarea=tarea.filter(tarea=>{return tarea.notes===notes});
                }
              }
            
            if(tarea.length!==0){
               tarea=tarea.map(tarea=>{
                 
                const {pob}=tarea;
                tarea=tarea.publicData();
                tarea.pob=pob;
               
                return tarea;
              })
              return res.status(200).send(tarea);
            }else{
              return res.status(404).send({
                status:"404",
                type:"Not found",
                msj:"Registro no encontrado"
              })
            }
          })
          .catch(next);
        }
}     
     

//.populate({path:'contexto',select:'nombre descripcion id:_id'})
function editarTarea(req, res, next){
     Tarea.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}).populate({path:'proyecto',select:'descripcion nombre id:_id'})
     .populate({path:'estatus',select:'nombre descripcion id:_id'})
     .populate({path:'tag',select:'nombre descripcion id:_id'})
    .then(tarea=>{
    if(!tarea){
      return res.status(404).send({status:'404',
      type:'Forbidden',
      msj:'No se encontro registro'
    })
    }

    const {pob}=tarea;
    tarea=tarea.publicData();
    tarea.pob=pob;
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
     consultarTareas,
     editarTarea,
     eliminarTarea
}