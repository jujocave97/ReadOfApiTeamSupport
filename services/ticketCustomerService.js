const { seq } = require('./../libs/sequelize');
const { TicketCustomerVersion, TicketCustomerSchema } = require('./../db/models/ticketCustomersModel')
const {addTOJson} = require('../keys/addToKeysToJSON');

TicketCustomerVersion.init(TicketCustomerSchema, TicketCustomerVersion.config(seq));
// metodos crud para contact , en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientes
async function insertTicketCustomer(dataContact) {
  //let transaction;
    try {
      //transaction = await seq.transaction();
      
      const newContact = await Contact.create(dataContact);
      //addTOJson(dataContact.ID, newContact.id, './keys/Contacts.json');
      console.log('Nuevo ID del ticket-customer:', newContact.id);
      //await transaction.commit();
    } catch (error) {
      console.error('Error al insertar el ticket-customer:', error);
    //   if (transaction) await transaction.rollback();
    // console.error('Error al insertar el producto:', error);
    }
}


module.exports = {insertTicketCustomer};