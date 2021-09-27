//se importa mongoose para usar la conexión

const mongoose =require('mongoose');
//se crea el Schema de Usuario/Proyecto
const UsuarioProyectoSchema = new mongoose.Schema({
    usuario: {type: mongoose.Schema.Types.ObjectId,ref: 'Usuario', required: true},
    rol:{type: mongoose.Schema.Types.ObjectId,ref: 'Rol', required: true},
    proyecto: {type: mongoose.Schema.Types.ObjectId,ref: 'Proyecto', required: true},
},{timestamps: true, collection: 'userProjects'});


let filters=['usuario','rol','proyecto'];
UsuarioProyectoSchema.methods.publicData = function()
{
    const{
        _id,
        usuario,
        rol,
        proyecto
    }= this.toObject();
    return{
        id: _id,
        usuario:usuario,
        rol:rol,
        proyecto:proyecto
    };
};

UsuarioProyectoSchema.statics.isFiltersAllowed=function(filter){
  
    return  filters.includes(filter);
  }
  UsuarioProyectoSchema.statics.filtersAllowed=function(filter){
    
    return  filters;
  }

mongoose.model('UsuarioProyecto', UsuarioProyectoSchema);