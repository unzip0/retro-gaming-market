const dbConfig = require("../config/db.config.js");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: {
    $like : Op.like
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};

db.sequelize = sequelize;

db.users = require('./user.model')(sequelize, Sequelize);
db.products = require('./product.model')(sequelize, Sequelize);
db.product_images = require('./product-images.model')(sequelize, Sequelize);

db.products.hasOne(db.product_images, { foreignKey: 'product_id'});

module.exports = db;
