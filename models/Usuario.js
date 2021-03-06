const mongoose = require('mongoose');
const uniqueValidator= require('mongoose-unique-validator');
const crypto =require('crypto');
const jwt =require('jsonwebtoken');
const secret= require('../config').secret;
const UsuarioSchema = new mongoose.Schema({
  username: {type:String,
    unique:true,
    required:[true,'No puede estar vacio el campo username'],
    match:[/^[A-Za-z]+[0-9]*[A-Za-z0-9]*$/, 'username invalido'],
    index:true
  },
  nombre: {type:String,lowercase:true,required:true},
  paterno: {type:String,lowercase:true, required:true},
  materno: {type:String,lowercase:true, required:true},
  email: {type:String, unique:[true,'falta email'],match:[/\S+@\S+.\S+/, "Email invalido"],index:true},
  telefono:{type:Number,match:[/[0-9]+$/,'Telefono no valido']},
  genero:{type:String,enum:['M','F'],uppercase:[true,'Requiere uso de mayusculas'],required:true},
  rol:{type:mongoose.Schema.Types.ObjectId,ref:'Rol',required:true},
  hash:String,
  salt:String
},{collection:'users',timestamps:true});

UsuarioSchema.plugin(uniqueValidator,{message:'Ya existe'})
let filters=['nombre','paterno','materno','email','username','limit'];
UsuarioSchema.methods.publicData = function(){
  const {
    _id,
    username,
    email,
    telefono,
    nombre,
    paterno,
    materno,
    genero, 
    rol_id,
    
  }=this.toObject();
  return {
    id:_id,
    username:username,
    email:email,
    telefono:telefono,
    nombre:nombre,
    paterno:paterno,
    materno:materno,
    genero:genero,
    rol:rol_id
  }
}
UsuarioSchema.statics.publicData = function(obj){
  const {
    _id,
    username,
    email,
    telefono,
    nombre,
    paterno,
    materno,
    genero, 
    rol_id,
    
  }=obj;
  return {
    id:_id,
    username:username,
    email:email,
    telefono:telefono,
    nombre:nombre,
    paterno:paterno,
    materno:materno,
    genero:genero,
    rol:rol_id
  }
}
UsuarioSchema.methods.createPassword= function(password){
  this.salt =crypto.randomBytes(16).toString('hex');
  this.hash =crypto.pbkdf2Sync(password,this.salt,10000,512,'sha512')
  .toString('hex'); 
}

UsuarioSchema.methods.validatePassword = function (password){
  const newHash =crypto.pbkdf2Sync(password,this.salt,10000,512,'sha512').
  toString('hex');
  return this.hash===newHash;
}

UsuarioSchema.methods.generaJWT = function(){
  const today=new Date();
  const exp =new Date(today);
  exp.setDate(today.getDate()+60);
  return jwt.sign({
    id: this._id,
    username:this.username,
    exp:parseInt(exp.getTime()/1000)
  },secret)


}

UsuarioSchema.methods.toAuthJSON =function(){
  return {
    username:this.username,
    email:this.email,
    token:this.generaJWT()
  }
}
UsuarioSchema.statics.isFiltersAllowed=function(filter){
  
  return  filters.includes(filter);
}
UsuarioSchema.statics.filtersAllowed=function(){
  
  return  filters;
}

mongoose.model('Usuario',UsuarioSchema);
