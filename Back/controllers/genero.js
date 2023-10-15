const Genero = require('../models/genero')
const { request, response } = require('express')

/**
 * Crear genero
 */
const createGenero = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { nombre, estado, fechaCreacion, fechaActualizacion, descripcion} = req.body
    try {
        const generoDB = await Genero.findOne({ nombre })

        if(generoDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from generos where nombre = ?
        
        const datos = {
            nombre,
            estado,
            fechaActualizacion,
            fechaCreacion,
            descripcion
        }
    
        const genero = new Genero(datos)
    
        await genero.save()
    
        return res.json(genero)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}
const getGeneros = async (req = request, 
    res = response) => {
        try{
            const {  } = req.query
            const generosDB = await Genero.find()
            console.log(generosDB)//select * from genero where estado=?
            return res.json(generosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getGenero = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const generosDB = await Genero.findById(id)
            console.log(generosDB)//select * from genero where estado=?
            return res.json(generosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
const updateGeneroByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const generoDB = await Genero.findById(id)
        if(!generoDB){
            return res.json({msg: 'No existe el tipo Genero'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const genero = await Genero.findByIdAndUpdate(id, data, {new: true})
        return res.json(genero)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const deleteGenero = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const generoDB = await  Genero.deleteOne({_id: id})//select * from tipo where estado=?
            return res.json(generoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = { 
    createGenero,
    getGenero, 
    getGeneros, 
    updateGeneroByID,
    deleteGenero
}
