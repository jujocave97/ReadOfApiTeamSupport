'use strict';
const { DataTypes } = require('sequelize');
const { TICKETSTATUSES_TABLE} = require('./../models/ticketStatusesModel');
const { USER_TABLE} = require('./../models/userModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(TICKETSTATUSES_TABLE, "CreatorID", {
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
    queryInterface.changeColumn(TICKETSTATUSES_TABLE, "ModifierID", {
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
    await queryInterface.removeColumn(TICKETSTATUSES_TABLE, "CreatorID");
    await queryInterface.removeColumn(TICKETSTATUSES_TABLE, "ModifierID");
  }
};