const  {insertCustomer}  = require('../services/customerService');
const path = require('path');
const fs = require ('fs').promises;
const {swapEngCalendar} = require('./../formats/changeDate');
// insertar los customers mas la org ID
async function objectList(){
    const data =await fs.readFile("./json/customers.json",'utf8');
    const objectList = JSON.parse(data);
    const customers = objectList.Customers;
    return customers;
}

// no hace falta referenciar ninguna tabla, el campo ajeno es la organizacion y siempre es el mismo valor
async function processCustomers( customers ){
    customers.forEach(async customer => {
        customer.OrganizationID = 748444
        customer.DateModified = swapEngCalendar( customer.DateModified);
        customer.DateCreated = swapEngCalendar( customer.DateCreated);
        await insertCustomer( customer);
    });
}
// funciona insertado

async function insertCustomers(){
    try{
        const customers = await objectList();
        await processCustomers(customers);
        console.log('Todos los clientes se han insertado correctamente.');
    }catch(error){
        console.error('Error al insertar clientes:', error);
    }
    
}


module.exports = {insertCustomers}