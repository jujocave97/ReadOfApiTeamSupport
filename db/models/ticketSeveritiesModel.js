const { Model, DataTypes, Sequelize } = require('sequelize');
// esquema de la tabla ticket severities y sus respectivos campos
const TICKETSEVERITIES_TABLE = 'ticket_severities';

const TicketSeveritiesSchema = {
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
        type: "SMALLDATETIME",
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    Position : {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    OrganizationID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    CreatorID : {
        type: DataTypes.UUID
    },
    ModifierID: {
        type: DataTypes.UUID
    }
}

class TicketSeverities extends Model {
    static associate (models){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: TICKETSEVERITIES_TABLE, 
            modelName: TICKETSEVERITIES_TABLE,
            timestamps: false
        }
    }
}

module.exports = { TicketSeverities, TicketSeveritiesSchema, TICKETSEVERITIES_TABLE}