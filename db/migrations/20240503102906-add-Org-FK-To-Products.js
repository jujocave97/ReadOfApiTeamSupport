'use strict';
const { DataTypes } = require('sequelize');

const { PRODUCT_TABLE, ProductSchema } = require('./../models/productModel');
const { ORGANIZATION_TABLE } = require('./../models/organizationModel');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(PRODUCT_TABLE, "organizationID", {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: ORGANIZATION_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(PRODUCT_TABLE, "organizationID");
  }
};
