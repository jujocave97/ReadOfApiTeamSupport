const  {insertProductVerion}  = require('../services/productVersionStatusesService');
const {swapEngCalendar} = require('./../formats/changeDate');
const fs = require ('fs').promises;
// insercion de product versions 
async function objectList(){
    const data =await fs.readFile("./json/productVersion.json",'utf8');
    const objectList = JSON.parse(data);
    const productV = objectList.ProductVersionStatuses;
    return productV;
}

async function processProducts(productV){
    productV.forEach(async product => {
        product.DateModified = swapEngCalendar( product.DateModified);
        product.DateCreated = swapEngCalendar( product.DateCreated);
        await insertProductVerion( product);
    });
}


async function insertProductVersions () {
    try {
        const productV = await objectList();
        await processProducts(productV);
        console.log("Se han introducido correctamente los version products");
    }catch(error){
        console.log("Error al introducir los version products ", error);
    }
    
}

module.exports = {insertProductVersions}
// solo se referencia a la organizacion y solo hay una organizacion en el sistema
// funciona insertado y crea el json