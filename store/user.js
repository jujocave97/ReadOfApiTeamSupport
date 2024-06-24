const {insertUser} = require('./../services/userService');
const path = require('path');
const {swapEngCalendar} = require('./../formats/changeDate');
const {createListSync} = require('./../formats/createListOfJSON');
const fs = require ('fs');
// insercion de users con sus correspondientes FK
function objectList(){
    const data = fs.readFileSync("./json/users.json",'utf8');
    const objectList = JSON.parse(data);
    const groups = objectList.Users;
    return groups;
}

async function processUsers(users){
    const groupList =await createListSync('Groups');
    users.forEach(async user => {
        if(user.GroupID in groupList){
            const group = groupList[user.GroupID];
            user.GroupID = group;
        }
        user.LastLogin = swapEngCalendar(user.LastLogin);
        user.LastActivity = swapEngCalendar(user.LastActivity);
        user.LastPing = swapEngCalendar(user.LastPing);
        user.DateModified = swapEngCalendar( user.DateModified);
        user.DateCreated = swapEngCalendar( user.DateCreated);
        await insertUser(user);
    });
}

 async function insertUsers(){
   try{
    const users = objectList();
    processUsers(users);
    console.log("Se ha introducido correctamente los usuarios");
   }catch(error){
        console.log("Error al introducir los usuarios ", error);
   }
}

module.exports = {insertUsers}

//funciona INSERTADO y crea el json