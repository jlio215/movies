const Tipo = require('../models/tipo')
const { request, response } = require('express')

/**
 * Crear tipo
 */
const createTipo = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { nombre, fechaCreacion, fechaActualizacion, descripcion} = req.body
    try {
        const tipoDB = await Tipo.findOne({ nombre })

        if(tipoDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from tipos where nombre = ?
        
        const datos = {
            nombre,
            fechaActualizacion,
            fechaCreacion,
            descripcion
        }
    
        const tipo = new Tipo(datos)
    
        await tipo.save()
    
        return res.status(201).json(tipo)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}
const getTipos = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const tiposDB = await Tipo.find({estado})//select * from tipo where estado=?
            return res.json(tiposDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getTipo = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const tiposDB = await Tipo.findById(id)//select * from tipo where estado=?
            return res.json(tiposDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
const updateTipoByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const tipoDB = await Tipo.findById(id)
        if(!tipoDB){
            return res.json({msg: 'No existe el tipo Tipo'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipo = await Tipo.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipo)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const deleteTipo = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const tiposDB = await Tipo.deleteOne({_id: id})//select * from tipo where estado=?
            return res.json(tiposDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = { 
    createTipo, 
    getTipo,
    getTipos, 
    updateTipoByID,
    deleteTipo
}
