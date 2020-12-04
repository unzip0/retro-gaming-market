/* jshint indent: 2 */

// const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes)  => {
  const User = sequelize.define('sysusers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "sysusers_user_name_unique"
    },
    display_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profile_picture: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "sysusers_email_unique"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_enabled: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    request_password: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    is_activated: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zipcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 46
    },
    country_code: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "ES"
    },
    amountEURO: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    concept: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_vat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_company: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    last_loggin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1
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
    orders_no_received: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    google_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    avatar_original: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comision: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'sysusers',
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
        name: "sysusers_user_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_name" },
        ]
      },
      {
        name: "sysusers_email_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "sysusers_country_id_index",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "sysusers_country_code_index",
        using: "BTREE",
        fields: [
          { name: "country_code" },
        ]
      },
    ]
  });

  return User;
};
