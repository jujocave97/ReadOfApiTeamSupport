const { Model, DataTypes, Sequelize } = require('sequelize');

const TICKETSTATUSES_TABLE = 'ticket_statuses';
// esquema de la tabla ticket staus y sus respectivos campos
const TicketStatusesSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    Name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    Description: {
        type: DataTypes.STRING
    },
    DateCreated: {
        type: "SMALLDATETIME",
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    DateModified: {
        type:"SMALLDATETIME",
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    IsClosed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    Position : {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    OrganizationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    CreatorID : {
        type: DataTypes.UUID
    },
    ModifierID: {
        type: DataTypes.UUID
    }
}

class TicketStatus extends Model {
    static associate (models){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: TICKETSTATUSES_TABLE, 
            modelName: TICKETSTATUSES_TABLE,
            timestamps: false
        }
    }
}

module.exports = { TicketStatus, TicketStatusesSchema, TICKETSTATUSES_TABLE}