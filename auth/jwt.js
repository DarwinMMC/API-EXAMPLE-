const jwt = require('jsonwebtoken')
const {secret_key} = require('../config')

async function generateJWT(payload){
    const token = jwt.sign(payload,secret_key); 
    return token
}

async function validateJWT(token){
    return jwt.verify(token,secret_key)
}


module.exports = {
    generateJWT,
    validateJWT
}