'use strict';

const { ProductVersionSchema, PRODUCTVERSION_TABLE } = require('./../models/productVersionStatuses');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCTVERSION_TABLE, ProductVersionSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(PRODUCTVERSION_TABLE);
  }
};