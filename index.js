const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
var appRoot = require("app-root-path");

const config = require('./config');
const routes = require('./routers/index.router');
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function listen() {
  app.listen(config.port);
  console.log('Express app started on port ' + config.port);
}

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);
  return mongoose.connect(config.db, { keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true });
}
app.use('/', routes);

app.use(express.static(path.join(appRoot.path, '../anantadi-frontend/build')));
app.get('*', (req, res) => {
      res.sendFile(path.join(appRoot.path, "../anantadi-frontend/build/index.html"));
});

connect();