const { Model, DataTypes, Sequelize } = require('sequelize');
// esquema de la tabla product version y sus respectivos campos
const PRODUCTVERSION_TABLE = 'product_version';

const ProductVersionSchema = {
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
    IsShipping: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    IsDiscontinued: {
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
    }
}

class ProductVersion extends Model {
    static associate (models){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCTVERSION_TABLE, 
            modelName: PRODUCTVERSION_TABLE,
            timestamps: false
        }
    }
}

module.exports = { ProductVersion, ProductVersionSchema, PRODUCTVERSION_TABLE}