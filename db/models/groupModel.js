const {Model, DataTypes, Sequelize } = require('sequelize');
const {Organization} = require('./organizationModel')
// esquema de la tabla group y sus respectivos campos
const GROUP_TABLE = 'groups';

const GroupSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
    },
    OrganizationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt:{
        type: "SMALLDATETIME",
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt:{
        type: "SMALLDATETIME",
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    }
}

class Group extends Model {
    static associate(models){
        
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: GROUP_TABLE,
            modelName: GROUP_TABLE,
            timestamps: true
        }
    }
}

module.exports = { Group, GroupSchema, GROUP_TABLE}