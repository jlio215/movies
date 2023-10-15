const { Router } = require('express')
const {createGenero, getGeneros, getGenero, updateGeneroByID, deleteGenero} = require('../controllers/genero')

// const {deleteGeneroByID} = require('../controllers/genero')


const router = Router()

/**
 * Crear Genero
 */
router.post('/', createGenero)

/**
 * consultar todos los Generoes
 */
router.get('/', getGeneros)

/**
 * Consultar un Genero por su ID
 */
router.get('/:id', getGenero)
/**
 * Actualizar Genero
 */
router.put('/:id', updateGeneroByID)

/**
 * Borrar un Genero
 */
router.delete('/:id', deleteGenero)

module.exports = router