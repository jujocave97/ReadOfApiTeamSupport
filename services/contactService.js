const { seq } = require('./../libs/sequelize');
const { Contact, contactSchema } = require('./../db/models/contactsModel')
const {addTOJson} = require('../readAPI/addToKeysToJSON');

Contact.init(contactSchema, Contact.config(seq));
// metodos crud para contact , en este caso solo esta insert, si se requieren mas se hacen los metodos correspondientes
async function insertContact(dataContact) {
  //let transaction;
    try {
      //transaction = await seq.transaction();
      
      const newContact = await Contact.create(dataContact);
      addTOJson(dataContact.ID, newContact.id, './keys/Contacts.json');
      console.log('Nuevo ID del contacto:', newContact.id);
      //await transaction.commit();
    } catch (error) {
      console.error('Error al insertar el contacto:', error);
    //   if (transaction) await transaction.rollback();
    // console.error('Error al insertar el producto:', error);
    }
}


module.exports = {insertContact};