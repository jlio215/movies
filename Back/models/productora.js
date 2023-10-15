const { Schema, model } = require('mongoose')

const ProductoraSchema = Schema({
    nombreProductora: {
        type: String,
        required: [true, 'Nombre tipo requerido'],
        minlength: 1,
        unique: true
    },
    estado: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: new Date() 
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    slogan: {
        type: String
    },
    descripcion: {
        type: String
    }
})

module.exports = model('Productora', ProductoraSchema)