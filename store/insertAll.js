const { insertOrganizations } = require('./organization');
const { insertCustomers } = require('./customer');
const { insertContacts } = require('./contact');
const { insertGroups } = require('./group');
const { insertActions } = require('./insertActions');
const { insertProducts } = require('./product');
const { insertProductVersions } = require('./productVersion');
const { insertTickets } = require('./ticket');
const { insertTicketStatuses } = require('./ticketStatus');
const { insertTicketSeverities } = require('./ticketSeverity');
const { insertTicketTypes } = require('./ticketType');
const { insertUsers } = require('./user');
// automatizacion de los inserts segun su orden de prioridad
// ejecutar este js para poblar la bd entera
async function insertAll() {
    try {
        await insertOrganizations();
        await insertCustomers();
        await insertGroups();
        await insertProducts();
        await insertProductVersions();
        await insertUsers();
        await insertContacts(); 
        await insertTicketTypes();
        await insertTicketSeverities();
        await insertTicketStatuses();
        await insertTickets();
        await insertActions();
       
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

insertAll();
