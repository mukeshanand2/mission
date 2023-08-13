const Category = require('../models/categories.model');

async function createCategory(data) {
  const category = await Category.create(data);
  return category;
}

async function getAllCategories() {
  const categories = await Category.find();
  return categories;
}

async function getCategoryById(categoryId) {
  const category = await Category.findById(categoryId);
  return category;
}

async function updateCategory(id, data) {
  const Category = await Category.findByIdAndUpdate(id, data, { new: true });
  return Category;
}

async function deleteMission(id) {
  await Category.findByIdAndDelete(id);
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteMission,
};
