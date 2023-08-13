const express = require('express');
const router = express.Router();
const siteController = require('../contoller/site.controller');
const jwtUtils = require('../utils/jwtUtils');

router.post('/', jwtUtils.verifyToken, siteController.createSite);

router.get('/', siteController.getSites);

router.put('/:id', jwtUtils.verifyToken, siteController.updateSite);

router.delete('/:id', jwtUtils.verifyToken, siteController.deleteSite);

module.exports = router;
