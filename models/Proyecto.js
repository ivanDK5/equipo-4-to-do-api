
/** Clase que representa un proyecto de trabajo y sus atributos*/
class Proyecto {
    constructor(id, titulo, descripcion, fechaCreacion, fechaModificacion, fechaTermino) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
        this.fechaTermino = fechaTermino;
      }
  }
  module.exports = Proyecto;
  