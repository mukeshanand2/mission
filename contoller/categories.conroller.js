const categoriesService = require('../services/categories.service');

async function createCategory(req, res) {
  try {
    const mission = await categoriesService.createCategory(req.body);
    res.json(mission);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create mission' });
  }
}

async function getAllCategories(req, res) {
  try {
    const missions = await categoriesService.getAllCategories();
    res.json(missions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch missions' });
  }
}

async function getCategoryById(req, res) {
  try {
    const missions = await categoriesService.getCategoryById();
    res.json(missions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch missions' });
  }
}

async function updateCategory(req, res) {
  try {
    const mission = await categoriesService.updateCategory(req.params.id, req.body);
    res.json(mission);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update mission' });
  }
}

async function deleteCategory(req, res) {
  try {
    await categoriesService.deleteCategory(req.params.id);
    res.json({ message: 'Mission deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete mission' });
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
