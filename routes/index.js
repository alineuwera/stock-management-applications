const express = require('express');
const allRoutes = express.Router();

const stockRoute = require('./stock.routes');
allRoutes.use('/stock', stockRoute);

module.exports =allRoutes;