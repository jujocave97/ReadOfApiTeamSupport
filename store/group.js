const  {insertGroup}  = require('../services/groupService');
const path = require('path');
const fs = require ('fs').promises;

// insertar los grupos
async function objectList(){
    const data =await fs.readFile("./json/groups.json",'utf8');
    const objectList = JSON.parse(data);
    const groups = objectList.Groups;
    return groups;
}

// siempre tiene el mismo valor de organizacion y es la unica clave ajena de la tabla a la que se insertan los grupos
async function processGroups(groups){
    groups.forEach(async element => {
        await insertGroup(element);
    });
}
async function insertGroups (){
    try{
        const list =await objectList();
        await processGroups(list);
        console.log("Se han insertado los grupos ");
    }catch(error){
        console.log("Error en la insercion de grupos", error);
    }
    
}

module.exports = {insertGroups}

// funciona y crea el json