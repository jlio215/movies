const { Router } = require('express')
const {createProductora, getProductora, getProductoras, updateProductoraByID, deleteProductora} = require('../controllers/productora')


const router = Router()

/**
 * Crear Productora
 */
router.post('/', createProductora)

/**
 * consultar todos los Productoraes
 */
router.get('/', getProductoras)

/**
 * Consultar un Productora por su ID
 */
router.get('/:id', getProductora)

/**
 * Actualizar Productora
 */
router.put('/:id', updateProductoraByID)

/**
 * Borrar un Productora
 */
router.delete('/:id', deleteProductora)

module.exports = router