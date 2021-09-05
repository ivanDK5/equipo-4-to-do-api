# Desarrollo Web Full Stack JavaScript
## Proyecto de Backend Fundamentals

Consiste en la creación de una API con la temática de una to do list. El alcance esperado es **por definir**

### *Equipo 4*
* José Ramón Carreño García
* Zaire Tanahi Díaz López
* Alicia Flores Flores
* Iván Gutiérrez Elizalde

## Entrega de Mitad de Módulo
### *Entidades*

<p align="center">
  <img src="img/Usuario-definicion.png" alt="Definición de usuarios" heigth="200px" width="200px">;
</p>

En la aplicación interactuán ususarios de forma general, sin embargo, estos mismos se dividen en dos (miembro 
y administrador de proyecto), ya que ciertas acciones sólo pueden ser llevadas a cabo según el tipo de usuario, 
es decir, tienen permisos establecidos dentro de la aplicación.

### *Historias de Usuario* 

* **Usuario**

| Cómo | Quiero | Para |
| --- | --- | --- |
| usuario | registrarme a la aplicación | crear una cuenta |
| usuario | iniciar sesión | usar la herramienta |
| usuario | editar mi cuenta | actualizar mis datos |
| usuario | eliminar mi cuenta | darme de baja |
| usuario | crear tareas | llevar registro de mis pendientes |
| usuario | editar tareas | modificar su información |
| usuario | eliminar tareas | desechar las que no llevaré a cabo |
| usuario | consultar mis tareas | verificar mi avance |
| usuario | consultar el entorno | tener el contexto del proyecto |
| usuario | consultar el listado de tareas | verificar mi avance |
| usuario | marcar las tareas | cambiar su estatus |
| usuario | consultar un entorno de actividad | visualizar las tareas |
| usuario | consultar los proyectos existentes | conocer el estatus global |


* **Administrador del proyecto**

| Cómo | Quiero | Para |
| --- | --- | --- |
| administrador | crear un entorno de actividad | organizar mis tareas |
| administrador | editar un entorno de actividad| modificar sus propiedades |
| administrador | eliminar un entorno de actividad | evitar entornos innecesarios |
| administrador | crear un proyecto | coordinar mis tareas |
| administrador | asignar tareas | delegar actividades |
| administrador | eliminar un proyecto | removerlo de los pendientes en la aplicación |

  
### *Casos de uso*
<p align="center">
  <img src="img/Casos de Uso-To-do.png" alt="Casos de Uso-To Do" heigth="200px" width="200px">;
</p>

### *Descripción Técnica*
# Instrucciones
Para clonar este repositorio se debe abrir la consola y ejecutar los siguientes comandos:

```git
git clone https://github.com/ivanDK5/equipo-4-to-do-api
```

Abrir el folder en el editor de su preferencia y en la terminal ejecutar los siguientes comandos:
_(Nota: debe tener instalado node con npm incluído)_

```npm
npm install
npm run start
```

`npm install` instala todas las dependencias incluidos en package.json 

`npm run start` es el script para ejecutar el servidor

## Body Parser
Extrae toda la parte del cuerpo de una secuencia de solicitud entrante.
## Express
Framework para node.
## Cors
Sumistra un middleware a Connect/Express que puedo utilizarse para habilitar el control de acceso CORS.

Para instalar estas dependencias:

`npm install dependencias dependencias`

```javascript
npm install express body-parser cors ...todas las dependencias separadas por espacio
```
## MongoDB
Es una base de datos de documentos que ofrece una gran escalabilidad y flexibilidad, y un modelo de consultas e indexación avanzado.