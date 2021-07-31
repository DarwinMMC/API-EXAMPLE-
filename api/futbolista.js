const connection = require('../modelo/mysql')

const player_readAll = (req,res)=>{
    connection.query(`SELECT * FROM futbolista`, function (error, results, fields) {
        try {
            throw new Error(error.message);
        } catch (err) {
            console.log(err.message)
        }   
        if(error){
            res.status(500)
            res.send("error")
        }
        if(results!=null){
            res.status(200)
            res.json(results)
        }

    })

}

const player_read = (req,res)=>{

    connection.query(req.params.query, function (error, results, fields) {
        try {
            throw new Error(error.message);
        } catch (err) {
            console.log(err.message)
        }   
        if(error){
            res.status(500)
            res.send("error"+error)
        }
        if(results!=null){
            res.status(200)
            res.json(results)
        }

    })
}

const player_create = (req,res)=>{
    connection.query(`INSERT INTO futbolista(name,age,team_id,squad_number,position,nationality) VALUES ('${req.body.name}',${req.body.age},${req.body.team_id},${req.body.squad_number},'${req.body.position}','${req.body.nationality}')`, 
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
        res.status(201)
        res.send("ok")
        
    })
}

const player_update = (req,res)=>{
    connection.query(`UPDATE futbolista SET name = '${req.body.name}', age = ${req.body.age}, team_id = ${req.body.team_id}, squad_number = ${req.body.squad_number}, position = '${req.body.position}', nationality = '${req.body.nationality}' WHERE Id=${req.params.id}`, 
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
        if(results!=null){
            res.status(200)
            res.json(results.affectedRows)
        }

    })
}

const player_delete = (req,res)=>{
    if(req.params.id!=undefined){
        connection.query(`DELETE FROM futbolista WHERE Id = ${req.params.id}`, 
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
            if(results!=null){
                res.status(200)
                res.json(results.affectedRows)
            }
            
        })
    }
    
}


module.exports = {
    player_readAll,
    player_read,
    player_create,
    player_update,
    player_delete
}