const mongoose = require('mongoose');

const EstatusSchema = new mongoose.Schema({
  nombre: {type: String, required: true}, 
  descripcion: {type: String, required: true}, 
  fechaAlta: { type: Date },
  fechaBaja: { type: Date }
  }, { timestamps: true , collection : 'estatus'});

  EstatusSchema.methods.publicData = function() {
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
  
  mongoose.model('Estatus', EstatusSchema)