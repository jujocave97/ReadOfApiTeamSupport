const { seq } = require('./../libs/sequelize');
const { Customer, CustomerSchema } = require('./../db/models/customerModel')
const {addTOJson} = require('../readAPI/addToKeysToJSON');

Customer.init(CustomerSchema, Customer.config(seq));
// metodos crud para customer, en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientes
async function insertCustomer(dataCustomer) {
    try {
      const newCustomer = await Customer.create(dataCustomer);
      await addTOJson(dataCustomer.ID, newCustomer.id, './keys/Customers.json');
      console.log('Nuevo ID del cliente:', newCustomer.id);
    } catch (error) {
      console.error('Error al insertar el cliente:', error);
    }
}

module.exports = {insertCustomer};