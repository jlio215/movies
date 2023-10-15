const Media = require('../models/media')
const { request, response } = require('express')

/**
 * Crear media
 */
const createMedia = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { serial,
        titulo,
        sipnosis,
        url,
        imagen,
        fechaCreacion,
        fechaActualizacion,
        genero,
        director,
        productora,
        tipo} = req.body
    try {
        const mediaDB = await Media.findOne({ serial })

        if(mediaDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from medias where nombre = ?
        
        const datos = {
            serial,
            titulo,
            sipnosis,
            url,
            imagen,
            fechaCreacion,
            fechaActualizacion,
            genero,
            director,
            productora,
            tipo
        }
    
        const media = new Media(datos)
    
        await media.save()
    
        return res.status(201).json(media)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}
const getMedias = async (req = request, 
    res = response) => {
        try{
            const {  } = req.query
            const mediasDB = await Media.find()//select * from media where estado=?
            return res.json(mediasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getMedia = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const mediasDB = await Media.findById(id)//select * from media where estado=?
            return res.json(mediasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}
//TODO
const updateMediaByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const mediaDB = await Media.findById(id)
        if(!mediaDB){
            return res.json({msg: 'No existe el tipo Media'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const media = await Media.findByIdAndUpdate(id, data, {new: true})
        return res.json(media)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const deleteMedia = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const mediaDB = await Media.deleteOne({_id: id})//select * from tipo where estado=?
            return res.json(mediaDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = { 
    createMedia, 
    getMedia,
    getMedias, 
    updateMediaByID,
    deleteMedia
}
