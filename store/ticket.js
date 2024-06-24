const { copyFile } = require('fs');
const { insertTicket } = require('../services/ticketService');
const fs = require('fs').promises;
const { swapEngCalendar } = require('./../formats/changeDate');
const { createListSync } = require('./../formats/createListOfJSON');
// insercion de todos los tickets modificando las FK correspondientes
async function objectList() {
    const data = await fs.readFile("./json/tickets.json", 'utf8');
    const objectList = JSON.parse(data);
    const tickets = objectList.Tickets;
    return tickets;
}

async function processTickets(tickets) {
    const productList = await createListSync('Products');
    const groupList = await createListSync('Groups');
    const userList = await createListSync('Users');
    const ticketStatusList = await createListSync('TicketStatus');
    const ticketTypeList = await createListSync('TicketTypes');
    const ticketSeverityList = await createListSync('TicketSeverities');
    const customerList = await createListSync('Customers');
    const contactList = await createListSync('Contacts');

    const promises = tickets.map(async ticket => {
       

        if (ticket.ProductID in productList) {
            ticket.ProductID = productList[ticket.ProductID];
        }

        if (ticket.GroupID in groupList) {
            ticket.GroupID = groupList[ticket.GroupID];
        }

        if (ticket.UserID in userList) {
            ticket.UserID = userList[ticket.UserID];
        }

        if (ticket.Status in ticketStatusList) {
            ticket.TicketStatusID = ticketStatusList[ticket.Status];
        }

        if (ticket.TicketTypeID in ticketTypeList) {
            ticket.TicketTypeID = ticketTypeList[ticket.TicketTypeID];
        }

        if (ticket.TicketSeverityID in ticketSeverityList) {
            ticket.TicketSeverityID = ticketSeverityList[ticket.TicketSeverityID];
        }
        ticket.CustomerID = null;

        if(ticket.Customers){


            if (ticket.Customers.Customer[0] && ticket.Customers.Customer[0].hasOwnProperty('CustomerID')) {
                const firstCustomerID = ticket.Customers.Customer[0].CustomerID;
                if(firstCustomerID in customerList){
                    ticket.CustomerID=customerList[firstCustomerID];
                   
                }
            }

            if(ticket.Customers.Customer instanceof Array){
                const firstCustomerID = ticket.Customers.Customer[0].CustomerID;
                if(firstCustomerID in customerList){
                    ticket.CustomerID=customerList[firstCustomerID];
                }
            }
            if(ticket.Customers.Customer instanceof Object){
                const firstCustomerID = ticket.Customers.Customer.CustomerID;
                if(firstCustomerID in customerList){
                    ticket.CustomerID=customerList[firstCustomerID];
                }
            }
        }
        ticket.Customers = null;

        ticket.ContactID = null;
        if(ticket.Contacts){
            
             if(ticket.Contacts.Contact instanceof Array){
                 const firstContactID = ticket.Contacts.Contact[0].ContactID;
                 if(firstContactID in contactList){
                     ticket.ContactID=contactList[firstContactID];
                 }
             }
             if(ticket.Contacts.Contact instanceof Object){
                 const firstContactID = ticket.Contacts.Contact.ContactID;
                 if(firstContactID in contactList){
                     ticket.ContactID=contactList[firstContactID];
                 }
             }
         }
        

        ticket.CreatorID = userList[ticket.CreatorID];
        ticket.ModifierID = userList[ticket.ModifierID];
        ticket.SlaViolationHours = 0.00;
        ticket.SlaWarningHours = 0.00;
        ticket.DateModified = swapEngCalendar(ticket.DateModified);
        ticket.DateCreated = swapEngCalendar(ticket.DateCreated);
        ticket.DateClosed = swapEngCalendar(ticket.DateClosed);
        ticket.DueDate = swapEngCalendar(ticket.DueDate);
        if (ticket && typeof ticket.CustomerID !== 'undefined') {
            ticket.CustomerID = ticket.CustomerID; // No cambia
        } else {
            ticket.CustomerID = null;
        }
       
        await insertTicket(ticket);
        return
    });

    await Promise.all(promises);
}

async function insertTickets() {
    try {
        const tickets = await objectList();
        await processTickets(tickets);
        console.log("Se han introducido los tickets correctamente");
    } catch (error) {
        console.log("Error al introducir los tickets", error);
    }
}

module.exports = { insertTickets };
