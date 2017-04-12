const express = require('express');
const path = require('path');
const routes = require('./routes.js');
const app = express();

app.use('/api/', routes)

module.exports = app;
