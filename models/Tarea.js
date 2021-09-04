/** Clase que representa a las tareas del to do**/

class Tarea {
    constructor(id, titulo, descripcion, fechaCreacion, fechaModificacion, fechaTermino) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.fechaCreacion = fechaCreacion;
      this.fechaModificacion = fechaModificacion;
      this.fechaTermino = fechaTermino;
    }
  }
  module.exports = Tarea;

  