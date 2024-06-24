const {insertContact} = require('../services/contactService');
const { swapEngCalendar } = require('./../formats/changeDate');
const fs = require('fs').promises;
const { createListSync } = require('./../formats/createListOfJSON');

// inserta los contactos cambiando el id de organizacion por customer
// crea una lista de contactos
async function objectList() {
    const data =await  fs.readFile("./json/contacts.json", 'utf8');
    const objectList = JSON.parse(data);
    const contacts = objectList.Contacts;
    return contacts;
}

async function processContacts(contacts) {  // recorre los contactos y los inserta
    const customerList = await createListSync('Customers'); 
    contacts.forEach(async contact => {
    
        contact.CustomerID = customerList[contact.OrganizationID];
       
        //console.log("customer id: "+contact.CustomerID)  // esta leyendo los ids anteriores
        contact.OrganizationID = 748444;
        
        contact.DateModified = swapEngCalendar(contact.DateModified);
        contact.DateCreated = swapEngCalendar(contact.DateCreated);
        contact.LastLogin = swapEngCalendar(contact.LastLogin);
        contact.LastActivity = swapEngCalendar(contact.LastActivity);

        await insertContact(contact); 
    });
}


async function insertContacts() {
    try {
        const contacts =await  objectList();
        await processContacts(contacts);
    } catch (error) {
        console.error('Error inserting contacts:', error);
    }
}

module.exports = { insertContacts };
