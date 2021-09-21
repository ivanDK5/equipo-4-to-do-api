const mongoose=require('mongoose');
const Rol =mongoose.model('Rol');

function crearRol(req,res,next){
  let rol=new Rol(req.body);
  rol.save().then(rol=>{
    res.status(200).send(rol)
  }).catch(next);
}

function obtenerRoles(req,res,next){
  if(req.params.id){
    Rol.findById(req.params.id)
    .then(rol=>{res.status(200).send(rol)})
    .catch(next);
  }else{
    Rol.find()
    .then(rol=>{
      res.status(200).send(rol)
    }).catch(next);
  }
}

function modificarRol(req,res,next){
  Rol.findById(req.params.id)
  .then(rol=>{
    if(!rol){
      return res.sendStatus(401);
    }
    
    rol.save()
    .then(rol=>{
      res.status(200).json(rol.publicData())
    }).catch(next);

  })

}


function eliminarRol(req,res,next){
  Rol.findByIdAndDelete({_id:req.params.id})
  .then(rol=>{res.status(200).send('Rol eliminado')})

}

module.exports={
  crearRol,
  obtenerRoles,
  modificarRol,
  eliminarRol
}