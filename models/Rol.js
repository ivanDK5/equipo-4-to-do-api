const mongoose =require('mongoose');
const RolSchema =new mongoose.Schema({
  nombre:{type:String,required:true},
  descripcion:{type:String,required:true}
},{collection:'roles',timestamps:true});

RolSchema.methods.publicData=function() {
  
  const {_id,nombre,descripcion}=this.toObject();
  
  return {nombre:nombre,descripcion:descripcion,id:_id};
}

mongoose.model('Rol',RolSchema);
