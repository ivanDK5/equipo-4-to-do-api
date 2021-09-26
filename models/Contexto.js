const mongoose = require('mongoose');

const ContextoSchema = new mongoose.Schema({
  nombre: {type: String, required: true}, 
  descripcion: {type: String, required: true}, 
  fechaAlta: { type: Date },
  fechaBaja: { type: Date }
  }, { timestamps: true , collection : 'contexto'});

  ContextoSchema.methods.publicData = function() {
    const{
      _id,
      nombre,
      descripcion,
      fechaAlta,
      fechaBaja
    } = this.toObject();
    return {
      id: _id,
      nombre: nombre,
      descripcion: descripcion,
      fechaAlta: fechaAlta,
      fechaBaja: fechaBaja,
      };
  };
  
  mongoose.model('Contexto', ContextoSchema)