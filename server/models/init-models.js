var DataTypes = require("sequelize").DataTypes;
var _users = require("./user");
var _products = require("./product");

function initModels(sequelize) {
  var users = _users(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);


  return {
    users,
    products
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
