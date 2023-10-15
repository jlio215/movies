const Productora = require('../models/productora')
const { request, response } = require('express')

/**
 * Crear productora
 */
const createProductora = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { nombreProductora, estado, fechaCreacion, fechaActualizacion, slogan, descripcion } = req.body
    try {
        const productoraDB = await Productora.findOne({ nombreProductora })

        if(productoraDB) {
            return res.status(400).json({mjs: 'Ya existe nombreProductora'})
        }// select * from productoras where nombre = ?
        
        const datos = {
            nombreProductora, 
            estado, 
            fechaCreacion, 
            fechaActualizacion, 
            slogan, 
            descripcion 
        }
    
        const productora = new Productora(datos)
    
        await productora.save()
    
        return res.status(201).json(productora)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}
const getProductoras = async (req = request, 
    res = response) => {
        try{
            const {  } = req.query
            const productorasDB = await Productora.find({})//select * from productora where estado=?
            return res.json(productorasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getProductora = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const productorasDB = await Productora.findById(id)//select * from productora where estado=?
            return res.json(productorasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//TODO
const updateProductoraByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const productoraDB = await Productora.findById(id)
        if(!productoraDB){
            return res.json({msg: 'No existe el tipo Productora'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const productora = await Productora.findByIdAndUpdate(id, data, {new: true})
        return res.json(productora)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const deleteProductora = async (req = request, 
    res = response) => {
        try{
            const id = req.params.id
            const productoraDB = await Productora.deleteOne({_id: id})//select * from tipo where estado=?
            return res.json(productoraDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = { 
    createProductora,
    getProductora, 
    getProductoras, 
    updateProductoraByID,
    deleteProductora
}
