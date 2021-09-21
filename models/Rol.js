const mongoose =require('mongoose');
const RolSchema =new mongoose.Schema({
  nombre:{type:String,required:true},
  descripcion:{type:String,required:true}
},{collection:'roles',timestamps:true});

RolSchema.methods.publicData=()=>{
  return{
    id:this.id,
    nombre:this.nombre,
    descripcion:this.descripcion,
  }
}

mongoose.model('Rol',RolSchema);
