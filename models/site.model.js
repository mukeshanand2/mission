const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  site_name: String,
  position: {
    latitude: String,
    longitude: String,
  },
});

module.exports = mongoose.model('Site', siteSchema);
