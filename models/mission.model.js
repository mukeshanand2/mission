const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  alt: Number,
  speed: Number,
  name: String,
  waypoints: [
    {
      alt: Number,
      lat: Number,
      lng: Number,
    },
  ],
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model('Mission', missionSchema);
