const express = require('express');
const router = express.Router({ mergeParams: true });
const jwtUtils = require('../utils/jwtUtils');
const missionController = require('../contoller/mission.controller');

router.post('/', jwtUtils.verifyToken, missionController.createMission);

router.get('/', missionController.getMissions);

router.put('/:id', jwtUtils.verifyToken, missionController.updateMission);

router.delete('/:id', jwtUtils.verifyToken, missionController.deleteMission);

module.exports = router;
