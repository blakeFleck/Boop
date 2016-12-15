var express = require('express');
var userCtrl = require('../controllers/userController');
var boopHelper = require('../boopData/boopHelper.js');
var app = express();
var boopRouter = require('express').Router();

boopRouter.get('/', boopHelper.getBoops);
boopRouter.post('/', boopHelper.addBoop);
boopRouter.delete('/', boopHelper.deleteAllBoops);

boopRouter.post('/:id', boopHelper.saveCheckIn);

module.exports = boopRouter;