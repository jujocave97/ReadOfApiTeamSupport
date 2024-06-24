'use strict';
const { DataTypes } = require('sequelize');
const { ORGANIZATION_TABLE } = require('./../models/organizationModel');
const { GROUP_TABLE, GroupSchema} = require('./../models/groupModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(GROUP_TABLE, "organizationID", {
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
    await queryInterface.removeColumn(GROUP_TABLE, "organizationID");
  }
};
