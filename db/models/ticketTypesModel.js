const { Model, DataTypes, Sequelize } = require('sequelize');
// esquema de la tabla ticket types y sus columnas
const TICKETTYPES_TABLE = 'ticket_types';

const TicketTypesSchema = {
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
    IconURL: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    ProductLineID : {
        type: DataTypes.INTEGER,
        defaultValue: null
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

class TicketType extends Model {
    static associate (models){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: TICKETTYPES_TABLE, 
            modelName: TICKETTYPES_TABLE,
            timestamps: false
        }
    }
}

module.exports = { TicketType, TicketTypesSchema, TICKETTYPES_TABLE}