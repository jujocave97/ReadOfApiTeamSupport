'use strict';

const { organizationsSchema, ORGANIZATION_TABLE } = require ('./../models/organizationModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORGANIZATION_TABLE, organizationsSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(ORGANIZATION_TABLE);
  }
};
