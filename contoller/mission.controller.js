const missionService = require('../services/mission.servie');

async function createMission(req, res) {
  try {
    const mission = await missionService.createMission(req.body);
    res.json(mission);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create mission' });
  }
}

async function getMissions(req, res) {
  try {
    const missions = await missionService.getMissions();
    res.json(missions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch missions' });
  }
}

async function updateMission(req, res) {
  try {
    const mission = await missionService.updateMission(req.params.id, req.body);
    res.json(mission);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update mission' });
  }
}

async function deleteMission(req, res) {
  try {
    await missionService.deleteMission(req.params.id);
    res.json({ message: 'Mission deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete mission' });
  }
}

module.exports = {
  createMission,
  getMissions,
  updateMission,
  deleteMission,
};
