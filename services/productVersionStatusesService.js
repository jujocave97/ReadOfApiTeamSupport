const { seq } = require('./../libs/sequelize');
const {addTOJson} = require('../readAPI/addToKeysToJSON');
const { ProductVersion, ProductVersionSchema } = require('./../db/models/productVersionStatuses')

ProductVersion.init(ProductVersionSchema, ProductVersion.config(seq));
// metodos crud para product version , en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientes
async function insertProductVerion(dataPV) {
    try {
      const newProductVersion = await ProductVersion.create(dataPV);
       addTOJson(dataPV.ID, newProductVersion.id, './keys/ProductVersion.json');
      console.log('Nuevo ID de version de producto:', newProductVersion.id);
    } catch (error) {
      console.error('Error al insertar la version de producto:', error);
    }
}

module.exports = {insertProductVerion};