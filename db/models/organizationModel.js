const { Model, DataTypes, Sequelize } = require ('sequelize');
// esquema de la tabla organizations y sus respectivos campos
const ORGANIZATION_TABLE= 'organizations';
const organizationsSchema= {
    id:{
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING,
      }
}

class Organization extends Model {
    static associate (models){
        
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: ORGANIZATION_TABLE,
            modelName: ORGANIZATION_TABLE,
            timestamps: false
        }
    }
}

module.exports={ Organization, organizationsSchema, ORGANIZATION_TABLE}