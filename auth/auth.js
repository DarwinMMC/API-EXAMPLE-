const {validateJWT} = require('./jwt')

// verifico si existe un token, a menos que la ruta sea para autenticarse /login
const auth = (req,res,next)=>{

    if(req.path !="/login"){
        const header = req.headers['authorization']
        if(header != undefined){
            const token = (header.split(" "))[1]
            validateJWT(token)
            .then(token=>{
                next()
            })
            .catch(error=>{
                res.status(403)
                res.send("invalid token")
            })
        }else{
            res.status(500)
            res.send("token not found")
        }
    }else{
        next();
    }
}
  


module.exports = auth