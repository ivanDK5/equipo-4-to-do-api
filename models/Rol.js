const mongoose =require('mongoose');
const rolSchema =new mongoose.Schema({
  nombre:{type:String,required:true},
  descripcion:{type:String,required:true}
},{collection:'roles',timestamps:true});

rolSchema.methods.publicData=function() {
  
  const {_id,nombre,descripcion}=this.toObject();
  
  return {nombre:nombre,descripcion:descripcion,id:_id};
}

mongoose.model('Rol',rolSchema);
