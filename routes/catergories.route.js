const express = require('express');
const router = express.Router({ mergeParams: true });
const jwtUtils = require('../utils/jwtUtils');
const categoriesController = require('../contoller/categories.conroller');


router.get('/', categoriesController.getAllCategories);
router.get('/:id', categoriesController.getCategoryById);
router.post('/', jwtUtils.verifyToken, categoriesController.createCategory);
router.put('/:id', jwtUtils.verifyToken, categoriesController.updateCategory);
router.delete('/:id', jwtUtils.verifyToken, categoriesController.deleteCategory);

module.exports = router;
