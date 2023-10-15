const Director = require('../models/director')
const { request, response } = require('express')

/**
 * Crear director
 */
const createDirector = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { nombre, estado, fechaCreacion, fechaActualizacion} = req.body
    try {
        const directorDB = await Director.findOne({ nombre })

        if(directorDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from director where nombre = ?
        
        const datos = {
            nombre,
            estado,
            fechaActualizacion,
            fechaCreacion
        }
    
        const director = new Director(datos)
    
        await director.save()
    
        return res.status(201).json(director)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}
const getDirectores = async (req = request, 
    res = response) => {
        try{
            const {  } = req.query
            const directorDB = await Director.find()
            console.log(directorDB)//select * from genero where estado=?
            return res.json(directorDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getDirector = async (req = request, 
    res = response) => {
        try{
            const data = req.body
            const id = req.params.id
            const directorDB = await Director.findById(id)
            console.log(id)
            console.log(directorDB)//select * from genero where estado=?
            return res.json(directorDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
const updateDirectorByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const directorDB = await Director.findById(id)
        if(!directorDB){
            return res.json({msg: 'No existe el tipo Director'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const director = await Director.findByIdAndUpdate(id, data, {new: true})
        return res.json(director)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}
const deleteDirector = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const directorDB = await Director.deleteOne({_id: id})//select * from tipo where estado=?
            return res.json(directorDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = { 
    createDirector, 
    getDirectores,
    getDirector, 
    updateDirectorByID,
    deleteDirector
}
