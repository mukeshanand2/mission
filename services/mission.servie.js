const Mission = require('../models/mission.model');

async function createMission(data) {
  const mission = await Mission.create(data);
  return mission;
}

async function getMissions() {
  const missions = await Mission.find();
  return missions;
}

async function updateMission(id, data) {
  const mission = await Mission.findByIdAndUpdate(id, data, { new: true });
  return mission;
}

async function deleteMission(id) {
  await Mission.findByIdAndDelete(id);
}

module.exports = {
  createMission,
  getMissions,
  updateMission,
  deleteMission,
};
