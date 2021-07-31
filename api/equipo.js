const connection = require('../modelo/mysql')


const team_read = (req,res)=>{
    const filtro = Object.keys(req.query)[0];

    connection.query(`SELECT * FROM equipo`, function (error, results, fields) {
        try {
            throw new Error(error.message);
        } catch (err) {
            console.log(err.message)
        }  
        if(error){ 
            res.status(500)
            res.send(error.message)
        }
        res.status(200)
        res.json(results)
    })
}

const team_create = (req,res)=>{
    connection.query(`INSERT INTO equipo(name,leage,country) VALUES ('${req.body.name}','${req.body.leage}','${req.body.country}')`, 
    function (error, results, fields) {
        try {
            throw new Error(error.message);
        } catch (err) {
            console.log(err.message)
        }
        if(error){
              
            res.status(500)
            res.send(error.message)
        }
        res.status(201)
        res.send("ok")
    })
}

const team_update = (req,res)=>{
    connection.query(`UPDATE equipo SET name = '${req.body.name}', leage = '${req.body.leage}', country = '${req.body.country}'  WHERE Id=${req.params.id}`, 
    function (error, results, fields) {
        try {
            throw new Error(error.message);
        } catch (err) {
            console.log(err.message)
        } 
        if(error){
           
            res.status(500)
            res.send(error.message)
        }
        res.status(200)
        res.send("ok")
    })
}

const team_delete = (req,res)=>{
    connection.query(`DELETE FROM equipo WHERE Id = ${req.params.id}`, 
    function (error, results) {
        try {
            throw new Error(error.message);
        } catch (err) {
            console.log(err.message)
        }   

        if(error){
            res.status(500)
            res.send(error.message)
        }

        if(results != null){
            res.status(200)
            res.json(results.affectedRows)
        }
       
    })
}


module.exports = {
    team_read,
    team_create,
    team_update,
    team_delete
}