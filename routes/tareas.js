const router = require('express').Router();

const {
    crearTarea,
    consultarTareas,
    editarTarea,
    eliminarTarea
} = require('../controllers/tareas');

router.post('/',crearTarea);
router.get('/',consultarTareas);
router.put('/:id',editarTarea);
router.delete('/:id',eliminarTarea);



module.exports = router;