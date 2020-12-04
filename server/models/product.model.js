/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('apporgproducts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name_en: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prod_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    game_category: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    game_producer: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    game_generation: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    game_location: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    language: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    volume: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    ean_upc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    media: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    platform: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    platform_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    region: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_featured: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    is_enabled: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    created_by: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    modified_by: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_imagen: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'apporgproducts',
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
        name: "apporgproducts_release_date_index",
        using: "BTREE",
        fields: [
          { name: "release_date" },
        ]
      },
      {
        name: "apporgproducts_prod_category_id_index",
        using: "BTREE",
        fields: [
          { name: "prod_category_id" },
        ]
      },
      {
        name: "apporgproducts_game_category_index",
        using: "BTREE",
        fields: [
          { name: "game_category" },
        ]
      },
      {
        name: "apporgproducts_game_producer_index",
        using: "BTREE",
        fields: [
          { name: "game_producer" },
        ]
      },
      {
        name: "apporgproducts_game_generation_index",
        using: "BTREE",
        fields: [
          { name: "game_generation" },
        ]
      },
      {
        name: "apporgproducts_game_location_index",
        using: "BTREE",
        fields: [
          { name: "game_location" },
        ]
      },
      {
        name: "apporgproducts_media_index",
        using: "BTREE",
        fields: [
          { name: "media" },
        ]
      },
      {
        name: "apporgproducts_platform_id_index",
        using: "BTREE",
        fields: [
          { name: "platform_id" },
        ]
      },
      {
        name: "apporgproducts_region_id_index",
        using: "BTREE",
        fields: [
          { name: "region_id" },
        ]
      },
      {
        name: "apporgproducts_is_featured_index",
        using: "BTREE",
        fields: [
          { name: "is_featured" },
        ]
      },
      {
        name: "apporgproducts_is_enabled_index",
        using: "BTREE",
        fields: [
          { name: "is_enabled" },
        ]
      },
    ]
  });
  return Product;
};
