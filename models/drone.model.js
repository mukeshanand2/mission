const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dronesSchema = new Schema({
  drone_id: String,
  created_at: Date,
  deleted_by: String,
  deleted_on: Date,
  drone_type: String,
  make_name: String,
  name: String,
  updated_at: Date,
});

module.exports = mongoose.model('Drone', dronesSchema);
