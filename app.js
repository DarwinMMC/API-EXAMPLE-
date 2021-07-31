const express = require('express')
const morgan = require('morgan')

const router = require('./routes/routes')
const auth = require('./auth/auth')

const app = express()

//middlewars
app.use(express.json())
app.use(morgan('dev'))
app.use(auth)
app.use(router)

app.use((err,req,res,next)=>{
    console.Error(err.message)
    res.status(500)
    res.send(error.message)
})


module.exports = app




