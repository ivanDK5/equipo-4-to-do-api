const router = require('express').Router;
const {
    crearEstatus,
    obtenerEstatus,
    modificarEstatus,
    eliminarEstatus,
} = require('../controllers/Estatuss')

router.get('/',obtenerEstatus);
router.post('/',crearEstatus);
router.put('/:id',modificarEstatus);
router.delete('/:id',eliminarEstatus);

module.exports = router;