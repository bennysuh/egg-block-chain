'use strict';
const Migrations = artifacts.require('./Migrations.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
