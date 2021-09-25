const mongoose = require('mongoose');

const EstatusSchema = new mongoose.Schema({
  nombre: {type: String, required: true}, 
  descripcion: {type: String, required: true}, 
  fechaAlta: { type: Date },
  fechaBaja: { type: Date },
  }, { timestamps: true , collection : 'estatus'})

  EstatusSchema.methods.publicData = function() {
    return {
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      fechaAlta: this.fechaAlta,
      fechaBaja: this.fechaBaja,
      };
  };
  
  mongoose.model('Estatus', EstatusSchema)