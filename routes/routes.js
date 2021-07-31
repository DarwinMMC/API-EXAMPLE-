const express = require('express')
const router = express.Router()
const cacheInit = require('./cache')
const filter = require('./filter')
const { player_readAll,player_read,player_create,player_update,player_delete} = require('../api/futbolista')
const {team_read,team_create,team_update,team_delete} = require('../api/equipo')

const login = require('../auth/login')


router.post('/login',login);

router.get("/api/team",cacheInit,team_read)
router.post("/api/team",team_create)
router.put("/api/team/:id",team_update)
router.delete("/api/team/:id",team_delete)

router.get("/api/player",cacheInit,player_readAll)
router.get("/api/player/:filter",cacheInit,filter,player_read)
router.post("/api/player",player_create)
router.put("/api/player/:id",player_update)
router.delete("/api/player/:id",player_delete)


module.exports = router