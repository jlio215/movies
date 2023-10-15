const { Router } = require('express')
const {createTipo, getTipos, getTipo, updateTipoByID, deleteTipo } = require('../controllers/tipo')

const router = Router()

/**
 * Crear Tipo
 */
router.post('/', createTipo)

/**
 * consultar todos los Tipoes
 */
router.get('/', getTipos)

/**
 * Consultar un Tipo por su ID
 */
router.get('/:id', getTipo)

/**
 * Actualizar Tipo
 */
router.put('/:id', updateTipoByID)

/**
 * Borrar un Tipo
 */
router.delete('/:id', deleteTipo)

module.exports = router