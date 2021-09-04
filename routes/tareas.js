const router = require('express').Router();

const {
    crearTarea,
    consultarListaTareas,
    editarTarea,
    eliminarTarea
 
} = require('../controllers/tareas')

router.post('/',crearTarea);
router.get('/',consultarListaTareas);
router.put('/:id',editarTarea);
router.delete('/:id',eliminarTarea);



module.exports = router;