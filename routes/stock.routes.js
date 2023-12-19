var { createItem,listStock }=require('../controllers/stock.controllers');
var express = require('express');
var stockRoute = express.Router();
  
stockRoute.post('/add',createItem);
stockRoute.post('/list',listStock);
 module.exports = stockRoute;

