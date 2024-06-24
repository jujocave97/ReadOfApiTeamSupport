'use strict';

const { DataTypes } = require('sequelize');
const { TICKETTYPES_TABLE} = require('./../models/ticketTypesModel');
const { USER_TABLE} = require('./../models/userModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(TICKETTYPES_TABLE, "CreatorID", {
      allowNull: true,
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: USER_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
    queryInterface.changeColumn(TICKETTYPES_TABLE, "ModifierID", {
      allowNull: true,
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: USER_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(TICKETTYPES_TABLE, "CreatorID");
    await queryInterface.removeColumn(TICKETTYPES_TABLE, "ModifierID");
  }
};