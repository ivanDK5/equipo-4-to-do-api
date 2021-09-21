const mongoose =require('mongoose');
const rolSchema =new mongoose.Schema({
  nombre:{type:String,required:true},
  descripcion:{type:String,required:true}
},{collection:'roles',timestamps:true});

rolSchema.methods.publicData=()=>{
  return{
    id:this.id,
    nombre:this.nombre,
    descripcion:this.descripcion,
  }
}

mongoose.model('Rol',rolSchema);
