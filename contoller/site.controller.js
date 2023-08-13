const siteService = require('../services/site.service');

async function createSite(req, res) {
  try {
    const site = await siteService.createSite(req.body);
    res.json(site);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create site' });
  }
}

async function getSites(req, res) {
  try {
    const sites = await siteService.getSites();
    res.json(sites);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sites' });
  }
}

async function updateSite(req, res) {
  try {
    const site = await siteService.updateSite(req.params.id, req.body);
    res.json(site);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update site' });
  }
}

async function deleteSite(req, res) {
  try {
    await siteService.deleteSite(req.params.id);
    res.json({ message: 'Site deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete site' });
  }
}

module.exports = {
  createSite,
  getSites,
  updateSite,
  deleteSite,
};
