const router = require('express').Router();

const {
    crearProyecto,
    consultarListaProyecto,
    editarProyecto,
    eliminarProyecto,
    asignarProyecto,
    recibirProyecto
} = require('../controllers/proyectos')

router.post('/',crearProyecto);
router.get('/',consultarListaProyecto);
router.put('/:id',editarProyecto);
router.delete('/:id',eliminarProyecto);
router.post('/',asignarProyecto);
router.get('/',recibirProyecto);

module.exports = router;
