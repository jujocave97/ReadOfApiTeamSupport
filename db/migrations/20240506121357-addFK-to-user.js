'use strict';
const { DataTypes } = require('sequelize');
const { USER_TABLE} = require('./../models/userModel');
const { GROUP_TABLE} = require('./../models/groupModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(USER_TABLE, "groupID", {
      allowNull: false,
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: GROUP_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USER_TABLE, "groupID");
  }
};