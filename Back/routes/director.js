const { Router } = require('express')
const {createDirector,getDirectores,  getDirector, updateDirectorByID, deleteDirector} = require('../controllers/director')

const router = Router()

/**
 * Crear Director
 */
router.post('/', createDirector)

/**
 * consultar todos los Directores
 */
router.get('/', getDirectores)

/**
 * Consultar un Director por su ID
 */
router.get('/:id', getDirector)
/**
 * Actualizar Director
 */
router.put('/:id', updateDirectorByID)

/**
 * Borrar un Director
 */
router.delete('/:id', deleteDirector)

module.exports = router