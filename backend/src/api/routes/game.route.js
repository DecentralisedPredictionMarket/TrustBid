const express = require('express');
const {fetchTeamsController} = require('../controllers/game.controller');
const router = express.Router();

router.get("/game/teams",fetchTeamsController);

module.exports = router;