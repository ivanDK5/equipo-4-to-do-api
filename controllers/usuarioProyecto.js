const mongoose = require('mongoose')
const UsuarioProyecto = mongoose.model('UsuarioProyecto')

function crearUsuarioProyecto(req, res, next)
{
          var usProyecto = new UsuarioProyecto(req.body);
          usProyecto.save().then(usproyectito =>{
              res.status(200).send(usproyectito)
          }).catch(next)
}

function consultarUsuariosProyectos(req, res, next){
    
  if(req.query){
   
    UsuarioProyecto.find().find().populate({path:'usuario',select:'username email telefono nombre apellidoPaterno apellidoMaterno genero id:_id'})
    .populate({path:'proyecto',select:'nombre descripcion id:_id'})
    .populate({path:'rol',select:'nombre descripcion id:_id'})
    .then(usproyecto=>{console.log(req.query);
      
        if(req.query){
          usuario=req.query.usuario;
          if(usuario){
            usproyecto=usproyecto.filter(usproyecto=>{return usproyecto.usuario===usuario});
          }
          rol=req.query.rol;
          if(rol){
            usproyecto=usproyecto.filter(usproyecto=>{return usproyecto.rol===rol});
          }
          
          proyecto=req.query.proyecto;
          if(proyecto){
            usproyecto=usproyecto.filter(usproyecto=>{return usproyecto.proyecto===proyecto});
          }
        }
      
      if(usproyecto.length!==0){
        usproyecto=usproyecto.map(usproyecto=>{
           
          const {pob}=usproyecto;
          usproyecto=usproyecto.publicData();
          usproyecto.pob=pob;
         
          return usproyecto;
        })
        return res.status(200).send(usproyecto);
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

function editarUsuarioProyecto(req, res, next)
{
    UsuarioProyecto.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}).populate({path:'usuario',select:'username email telefono nombre apellidoPaterno apellidoMaterno genero id:_id'})
    .populate({path:'proyecto',select:'nombre descripcion id:_id'})
    .populate({path:'rol',select:'nombre descripcion id:_id'})
   .then(usproyecto=>{
   if(!usproyecto){
     return res.status(404).send({status:'404',
     type:'Forbidden',
     msj:'No se encontro registro'
   })
   }
   const {paths}=usproyecto;
   usproyecto=usproyecto.publicData();
   usproyecto.paths=paths;
   usproyecto.msj='Colección modificada';
   return res.status(200).json(usproyecto);
 }).catch(next)

}

function eliminarUsuarioProyecto(req, res, next){
    Proyecto.findOneAndDelete({_id:req.params.id})
	.then(r => {res.status(200).send("La colección se eliminó.")})
	.catch(next)
}


module.exports =
{
    crearUsuarioProyecto,
    consultarUsuariosProyectos,
    editarUsuarioProyecto,
    eliminarUsuarioProyecto
}
