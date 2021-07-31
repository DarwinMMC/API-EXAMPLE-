const connection = require('../modelo/mysql')
const {generateJWT} = require('./jwt')

const login = (req,res)=>{

if(req.body.username != undefined && req.body.password!=undefined){
   const user = connection.query(`SELECT username FROM usuarios WHERE username='${req.body.username}' AND password='${req.body.password}'`, 
   function (error, results) {
        if (error){
            console.log("EROORR"+error)
            res.status(500);
            res.json({"token":null})
        }
        if(results.length>0){
            generateJWT(
                {
                    "username":results[0].username    
                }
            )
            .then(resultado=>{
                res.status(200)
                res.json({"token":resultado})
            })
            .catch(error=>{
                res.status(500)
                res.send("error generate token")
            })
        }else{
            res.status(400)
            res.json({})
        }
    
    });
    }
}


module.exports = login