// TODO: npm install express, npm install mongoose, npm install jsonwebtoken

const express = require('express');
const mongoose = require('mongoose');
const categoriesRoute = require('./routes/catergories.route');
const siteRoute = require('./routes/site.route');
const dronesRoute = require('./routes/drone.route');
const missionRoute = require('./routes/mission.route');

const app = express();
const PORT = 3000;


mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/categories', categoriesRoute);
app.use('/site', siteRoute);
app.use('/drones', dronesRoute);
app.use('/mission', missionRoute);

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
