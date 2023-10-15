const { Router } = require('express')
const {createMedia, getMedia, getMedias, updateMediaByID, deleteMedia} = require('../controllers/media')

const router = Router()

/**
 * Crear Media
 */
router.post('/', createMedia)

/**
 * consultar todos los Mediaes
 */
router.get('/', getMedias)

/**
 * Consultar un Media por su ID
 */
router.get('/:id', getMedia)

/**
 * Actualizar Media
 */
router.put('/:id', updateMediaByID)

/**
 * Borrar un Media
 */
router.delete('/:id', deleteMedia)

module.exports = router