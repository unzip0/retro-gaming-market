/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apporgproductimages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_path: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    modified_by: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'apporgproductimages',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "apporgproductimages_product_id_index",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
