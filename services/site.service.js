const Site = require('../models/site.model');

async function createSite(data) {
  const site = await Site.create(data);
  return site;
}

async function getSites() {
  const sites = await Site.find();
  return sites;
}

async function updateSite(id, data) {
  const site = await Site.findByIdAndUpdate(id, data, { new: true });
  return site;
}

async function deleteSite(id) {
  await Site.findByIdAndDelete(id);
}

module.exports = {
  createSite,
  getSites,
  updateSite,
  deleteSite,
};
