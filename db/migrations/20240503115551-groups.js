'use strict';

const { GroupSchema, GROUP_TABLE } = require('./../models/groupModel');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(GROUP_TABLE, GroupSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(GROUP_TABLE);
  }
};
