const Drone = require('../models/drone.model');

async function createDrone(data) {
  const drone = await Drone.create(data);
  return drone;
}

async function getAllDrones() {
  const drone = await Drone.find();
  return drone;
}

async function getDroneById(categoryId) {
  const drone = await Drone.findById(categoryId);
  return drone;
}

async function updateDrone(id, data) {
  const drone = await Drone.findByIdAndUpdate(id, data, { new: true });
  return drone;
}

async function deleteDrone(id) {
  await Drone.findByIdAndDelete(id);
}

module.exports = {
  createDrone,
  getAllDrones,
  getDroneById,
  updateDrone,
  deleteDrone,
};
