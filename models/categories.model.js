const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  color: String,
  tag_name: String,
  created_at: Date,
  updated_at: Date
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
