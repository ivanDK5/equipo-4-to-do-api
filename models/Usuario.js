class Usuario {
  constructor(id,username,nombre,apellidoPaterno,apellidoMaterno,genero,fechaCreacion,fechaModificacion,fechaBaja){
    this.id=id;
    this.username=username;
    this.nombre=nombre;
    this.apellidoPaterno=apellidoPaterno;
    this.apellidoMaterno=apellidoMaterno;
    this.genero=genero;
    this.fechaCreacion=fechaCreacion;
    this.fechaModificacion=fechaModificacion;
    this.fechaBaja=fechaBaja;
  }
}

module.exports=Usuario;