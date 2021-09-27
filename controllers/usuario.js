const mongoose =require('mongoose');
const Usuario =mongoose.model('Usuario');
const {filters}=require('../resources/filters');

function obtenerUsuarios(req, res,next){
  if(req.query){
   
    Usuario.aggregate(filters(Usuario.isFiltersAllowed,req.query))
    .then(user=>{
      if(user.length!==0){
        
        user=user.map(user=>{
        console.log(typeof user);   
          const {rol}=user;
          user=Usuario.publicData(user);
          user.rol=rol;
         
          return user;
        })
        return res.status(200).send(user);
      }else{
        return res.status(404).send({
          status:"404",
          type:"Not found",
          msj:"Registro no encontrado"
        })
      } 
    })
    .catch(next);
  }else{
    Usuario.find().populate({path:'rol',select:'descripcion nombre id:_id'})
    .then(user=>{
      if(user.length!==0){
        user=user.map(user=>{
           
          const {rol}=user;
          user=user.publicData();
          user.rol=rol;
         
          return user;
        })
        return res.status(200).send(user);
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

function obtenerUsuario(req,res,next){
  Usuario.findById(req.params.id).populate({path:'rol',select:'descripcion nombre id:_id'})
  .then(user=> {
    if(!user){
      return res.status(404).send({status:'404',
      type:'Forbidden',
      msj:'No se encontro registro'
    })
    }
        const {rol}=user;
        user=user.publicData();
        user.rol=rol;
    return res.json(user)

  })
  .catch(next)
}

function editarUsuario(req, res,next){
  Usuario.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}).populate({path:'rol',select:'descripcion nombre id:_id'})
  .then(user=>{
    if(!user){
      return res.status(404).send({status:'404',
      type:'Not Found',
      msj:'No se encontro registro'
    })
    }

    const {rol}=user;
    user=user.publicData();
    user.rol=rol;
    user.msj='Usuario modificado exitosamente';
    return res.status(200).json(user);
  }).catch(next)
} 

function eliminarUsuario(req, res,next){
  Usuario.findByIdAndDelete({_id: req.usuario.id})
  .then(user=>{
    user.msj='Usuario eliminado exitosamente',
    res.status(200).json(user);
  })
  .catch(next)
}



module.exports={
  obtenerUsuarios,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario
}