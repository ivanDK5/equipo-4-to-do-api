
/** Clase que representa un proyecto de trabajo y sus atributos*/
class Proyecto {
    constructor(id, titulo, descripcion, fecha_creacion, fecha_modificacion, fecha_termino) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha_creacion = fecha_creacion;
        this.fecha_modificacion = fecha_modificacion;
        this.fecha_termino = fecha_termino;
      }
  }
  module.exports = Proyecto;
  