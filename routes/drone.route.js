const express = require('express');
const dronesController = require('../contoller/drone.controller');
const router = express.Router({ mergeParams: true });
const jwtUtils = require('../utils/jwtUtils');


router.get('/',  dronesController.getAllDrones);
router.get('/:id', dronesController.getDroneById);
router.post('/',  jwtUtils.verifyToken, dronesController.createDrone);
router.put('/:id', jwtUtils.verifyToken, dronesController.updateDrone);
router.delete('/:id',  jwtUtils.verifyToken,dronesController.deleteDrone);

module.exports = router;
