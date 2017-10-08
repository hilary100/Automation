var World = require('cukefarm').World;

World.prototype.pageObjectMap = require('./PageObjectMap.js');
World.prototype.pageUtils = require('../PageUtils.js');
World.prototype.stepUtils = require('../StepUtils.js');
World.prototype.env = require('./Env.js');

module.exports.World = World;