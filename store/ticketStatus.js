const  {insertTicketStatus}  = require('../services/ticketStatusesService');
const fs = require ('fs').promises;
const {swapEngCalendar} = require('./../formats/changeDate');
const {createListSync} = require('./../formats/createListOfJSON');
// insercion de los ticket status con sus correspondientes FK 

async function objectList(){
    const data =await fs.readFile("./json/ticketStatus.json",'utf8');
    const objectList = JSON.parse(data);
    const ticketSeverities = objectList.TicketStatuses;
    return ticketSeverities;
}

 async function processTicketStatus(ticketStatus){
    const userList =await createListSync('Users');
    const ticketTypeList = await createListSync('TicketTypes');
    const nameList=[];

    ticketStatus.forEach(async ticket => {
        const creator = userList[ticket.CreatorID];
        ticket.CreatorID = creator;

        const modifier = userList[ticket.ModifierID];
        ticket.ModifierID = modifier;

        if (ticket.TicketTypeID in ticketTypeList){
            ticket.TicketTypeID = ticketTypeList[ticket.TicketTypeID]
        }

        ticket.DateModified = swapEngCalendar( ticket.DateModified);
        ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
        if(!nameList.includes(ticket.Name)){
            nameList.push(ticket.Name);
            await insertTicketStatus( ticket);
        }  
    });
}

async function insertTicketStatuses(){
    try{
        const ticketStatus = await objectList();
        await processTicketStatus(ticketStatus);
    }catch(error){
        console.log("Error al introducir ticket status", error);
    }
    
}

module.exports = {insertTicketStatuses}
// funciona  INSERTADO y crea json