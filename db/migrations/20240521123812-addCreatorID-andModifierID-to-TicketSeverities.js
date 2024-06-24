'use strict';
const { DataTypes } = require('sequelize');
const { TICKETSEVERITIES_TABLE} = require('./../models/ticketSeveritiesModel');
const { USER_TABLE} = require('./../models/userModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(TICKETSEVERITIES_TABLE, "CreatorID", {
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
    queryInterface.changeColumn(TICKETSEVERITIES_TABLE, "ModifierID", {
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
    await queryInterface.removeColumn(TICKETSEVERITIES_TABLE, "CreatorID");
    await queryInterface.removeColumn(TICKETSEVERITIES_TABLE, "ModifierID");
  }
};