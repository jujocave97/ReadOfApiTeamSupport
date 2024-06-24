const  {insertTicketSeverity}  = require('../services/ticketSeveritiesService');
const fs = require ('fs').promises;
const {swapEngCalendar} = require('./../formats/changeDate');
const {createListSync} = require('./../formats/createListOfJSON');

// insercion de todos los tickets severities incluyendo sus FK correspondientes

async function objectList(){
    const data =await fs.readFile("./json/ticketSeverities.json",'utf8');
    const objectList = JSON.parse(data);
    const ticketSeverities = objectList.TicketSeverities;
    return ticketSeverities;
}

async function processTicketSeverities(ticketSeverities){
    const userList =await createListSync('Users');

    ticketSeverities.forEach(async ticket => {
        const creator = userList[ticket.CreatorID];
        ticket.CreatorID = creator;
    
        const modifier = userList[ticket.ModifierID];
        ticket.ModifierID = modifier;
    
        ticket.DateModified = swapEngCalendar( ticket.DateModified);
        ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
        await insertTicketSeverity( ticket);
    });
}

async function insertTicketSeverities() {
    try{
        const ticketSeverities = await objectList();
        await processTicketSeverities(ticketSeverities);
        console.log("Se han introducido correctamente los severities tickets");
    }catch(error){
        console.log("Error al introducir severities tickets");
    }
    
}



module.exports = {insertTicketSeverities}

// funciona  INSERTADO y crea json