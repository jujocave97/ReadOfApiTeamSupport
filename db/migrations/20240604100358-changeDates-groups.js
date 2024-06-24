'use strict';
const { DataTypes } = require('sequelize');
const { ORGANIZATION_TABLE } = require('./../models/organizationModel');
const { GROUP_TABLE, GroupSchema} = require('./../models/groupModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(GROUP_TABLE, "createdAt", {
      type: "SMALLDATETIME",
      defaultValue: Sequelize.NOW
    });

    queryInterface.changeColumn(GROUP_TABLE, "updatedAt", {
      type: "SMALLDATETIME",
      defaultValue: Sequelize.NOW
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(GROUP_TABLE, "createdAt");
    await queryInterface.removeColumn(GROUP_TABLE, "createdAt");
  }
};
