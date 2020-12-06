var DataTypes = require("sequelize").DataTypes;
var _users = require("./user");
var _products = require("./product");
var _products_images = require("./product-images");

function initModels(sequelize) {
  var users = _users(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var product_images = _products_images(sequelize, DataTypes);

  return {
    users,
    products,
    product_images
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
