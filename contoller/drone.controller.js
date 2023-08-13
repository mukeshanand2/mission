const dronesService = require('../services/drone.service');

async function createDrone(req, res) {
  try {
    const mission = await dronesService.createDrone(req.body);
    res.json(mission);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create mission' });
  }
}

async function getAllDrones(req, res) {
  try {
    const missions = await dronesService.getAllDrones();
    res.json(missions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch missions' });
  }
}

async function getDroneById(req, res) {
  try {
    const missions = await dronesService.getDroneById();
    res.json(missions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch missions' });
  }
}

async function updateDrone(req, res) {
  try {
    const mission = await dronesService.updateDrone(req.params.id, req.body);
    res.json(mission);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update mission' });
  }
}

async function deleteDrone(req, res) {
  try {
    await dronesService.deleteDrone(req.params.id);
    res.json({ message: 'Mission deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete mission' });
  }
}

module.exports = {
  createDrone,
  getAllDrones,
  getDroneById,
  updateDrone,
  deleteDrone,
};

