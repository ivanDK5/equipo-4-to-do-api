const mongoose =require('mongoose');
const Usuario =mongoose.model('Usuario');

function obtenerUsuarios(req, res,next){
  Usuario.find().populate({path:'rol',select:'descripcion nombre id:_id'})
  .then(user=>{
    user=user.map(user=>{
      const {rol}=user;
      user=user.publicData();
      user.rol=rol;
      return user;
    })
    res.status(200).send(user)
  })
  .catch(next);
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
      type:'Forbidden',
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
    user.msj='Usuario modificado exitosamente',
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