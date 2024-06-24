const { seq } = require('./../libs/sequelize');
const { TicketContactVersion, TicketContactSchema } = require('./../db/models/ticketContactosModel')
const {addTOJson} = require('../keys/addToKeysToJSON');

TicketContactVersion.init(TicketContactSchema, TicketContactVersion.config(seq));
// metodos crud para contact , en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientes
async function insertTicketContact(dataContact) {
  //let transaction;
    try {
      //transaction = await seq.transaction();
      
      const newContact = await Contact.create(dataContact);
      //addTOJson(dataContact.ID, newContact.id, './keys/Contacts.json');
      console.log('Nuevo ID del ticket-contacto:', newContact.id);
      //await transaction.commit();
    } catch (error) {
      console.error('Error al insertar el contacto:', error);
    //   if (transaction) await transaction.rollback();
    // console.error('Error al insertar el producto:', error);
    }
}


module.exports = {insertTicketContact};