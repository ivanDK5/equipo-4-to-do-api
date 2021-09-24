const mongoose =require('mongoose');
const Usuario =mongoose.model('Usuario');

function obtenerUsuarios(req, res,next){
  Usuario.find()
  .then(user=>{
    user=user.map(user=>user.publicData())
    res.status(200).send(user)
  })
  .catch(next);
}

function obtenerUsuario(req,res,next){
  Usuario.findById(req.params.id)
  .then(user=> {
    if(!user){
      return sendStatus(401)
    }
    return res.json(user.publicData())
  })
  .catch(next)
}

function editarUsuario(req, res,next){
  Usuario.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
  .then(user=>{
    res.status(200).json({data:user.publicData(),msj:'Usuario modificado exitosamente'})
  }).catch(next)
} 

function eliminarUsuario(req, res,next){
  Usuario.findByIdAndDelete({_id: req.usuario.id})
  .then(user=>res.status(200).json({data:user.publicData(),msj:'Usuario modificado exitosamente'}))
  .catch(next)
}



module.exports={
  obtenerUsuarios,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario
}