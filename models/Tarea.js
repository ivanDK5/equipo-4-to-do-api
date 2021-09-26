/** Clase que representa a las tareas del to do**/

//se importa mongoose para usar la conexión

const mongoose =require('mongoose');

//se crea el Schema de Tarea
const TareaSchema = new mongoose.Schema({
  //id no se coloca
  titulo:{type: String, required: true},
  descripcion:{type: String, required: true},
  notes:{type: String, required: true}, 
   //El user_id será un id en referencia a la colección de usuarios. Usuario, es el esquema generado en el Modelo
  proyecto:{type: mongoose.Schema.Types.ObjectId,ref: 'Proyecto', required: true}, 
  tag:{type: mongoose.Schema.Types.ObjectId,ref: 'Tag', required: true},
 // contexto:{type: mongoose.Schema.Types.ObjectId,ref: 'Contexto', required: true},
  estatus:{type: mongoose.Schema.Types.ObjectId,ref: 'Estatus', required: true}   
},{timestamps: true, collection: 'tasks'}); //en referencia a la colección de tareas de la db en Mongo


TareaSchema.methods.publicData = function()
{

  const{
    _id,
    titulo,
    descripcion,
    notes,
    proyecto,
    tag,
   // contexto,
    estatus
  }=this.toObject();
  return {
    id:_id,
    titulo:titulo,
    descripcion:descripcion,
    notes:notes,
    proyecto:proyecto,
    tag:tag,
    //contexto:contexto,
    estatus:estatus
};
};

mongoose.model('Tarea',TareaSchema);