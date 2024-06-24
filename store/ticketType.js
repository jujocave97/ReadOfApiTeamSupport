const  {insertTicketType}  = require('../services/ticketTypesService');
const {createListSync} = require('./../formats/createListOfJSON');
const fs = require ('fs').promises;
const {swapEngCalendar} = require('./../formats/changeDate');

// insercion de tickets types con sus correspondientes FK

async function objectList(){
    const data =await fs.readFile("./json/ticketTypes.json",'utf8');
    const objectList = JSON.parse(data);
    const ticketTypes = objectList.TicketTypes;
    return ticketTypes;
}

async function processTicketTypes(ticketTypes){
    const userList =await createListSync('Users');
    ticketTypes.forEach(async ticket => {
        const creator = userList[ticket.CreatorID];
        ticket.CreatorID = creator;
    
        const modifier = userList[ticket.ModifierID];
        ticket.ModifierID = modifier;
    
        ticket.DateModified = swapEngCalendar( ticket.DateModified);
        ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
        await insertTicketType( ticket);
    });
}

async function insertTicketTypes(){
    try{
        const ticketTypes =await objectList();
        await processTicketTypes(ticketTypes);
        console.log("Se han introducido correctamente los ticket types");
    }catch(error){
        console.log("Se han cometido errores con ticket types", error)
    }
    
}


module.exports = {insertTicketTypes}

// funciona, inserta y crea JSON