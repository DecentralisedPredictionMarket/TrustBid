const express = require('express');
const {fetchTeamsController, fetchMatchesController} = require('../controllers/game.controller');
const router = express.Router();

router.get("/game/teams",fetchTeamsController);
router.get("/game/matches/upcoming/3-days",fetchMatchesController);

module.exports = router;