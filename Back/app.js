const express = require('express')
const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()
const cors = require('cors')

mongoConn()

const app = express()

app.use(express.json())

app.use(cors({
    origin: '*'
}))

const generos = require('./routes/genero')
const productora = require('./routes/productora')
const media = require('./routes/media')
const director = require('./routes/director')
const tipo = require('./routes/tipo')


app.use('/api/v1/generos', generos)
app.use('/api/v1/productora', productora)
app.use('/api/v1/media', media)
app.use('/api/v1/director', director)
app.use('/api/v1/tipo', tipo)

module.exports = app