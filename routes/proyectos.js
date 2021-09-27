const router = require('express').Router();

const {
    crearProyecto,
    consultarProyectos,
    editarProyecto,
    eliminarProyecto,
    asignarTareas,
    recibirProyecto
} = require('../controllers/proyectos');

router.post('/',crearProyecto);
router.get('/',consultarProyectos);
router.put('/:id',editarProyecto);
router.delete('/:id',eliminarProyecto);
router.post('/',asignarTareas);
router.get('/',recibirProyecto);

module.exports = router;
