const filter = (req,res,next)=>{
    const filter = Object.keys(req.query)[0]
    switch(filter){
        case 'team':
            req.params['query'] = `SELECT * FROM futbolista WHERE team_id = ${req.query.team}`
            break;
        case 'position':
            req.params['query'] = `SELECT * FROM futbolista WHERE position = '${req.query.position}'`
            break;
        case 'country':
            req.params['query'] = `SELECT * FROM futbolista INNER JOIN equipo on futbolista.team_id = equipo.Id WHERE country = '${req.query.country}'`
            break;
        default:
            res.status(400)
            res.json({}) 
        break;
    }
    next()
}


module.exports = filter