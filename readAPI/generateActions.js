const https = require('https');
const fs = require('fs');
const { type } = require('os');
require('dotenv').config();
const striptags = require('striptags');
const he = require('he');


const organizationID = process.env.ORGANIZATIONID;
const apiToken = process.env.APITOKEN;
const credentials = `${organizationID}:${apiToken}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');



// Procesar y eliminar HTML de los valores del JSON
function processAndCleanData(json) {
    const action = json.Actions;

    action.forEach(act => {
        if("Description" in act){
            if(act.Description === null)
                act.Description="";
            const html = act.Description;
            const clearHTML = he.decode(html);
            act.Description= striptags(clearHTML);
        }
    })
 
    return json;
}

function former() {
    const data = fs.readFileSync("./json/tickets.json", 'utf8');
    const objectList = JSON.parse(data);
    const tickets = objectList.Tickets;

    tickets.forEach(ticket => {  // recorrer cada ticket
        const options = {
            hostname: 'app.teamsupport.com',
            path: `/api/json/Tickets/${ticket.ID}/Actions`,
            method: 'GET',
            headers: {
                'Authorization': `Basic ${encodedCredentials}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Iditic',
            },
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data); // Asegúrate de parsear el JSON
                    const cleanedData = processAndCleanData(parsedData); // Limpiar el HTML
                    fs.writeFile(`./json/actions-${ticket.ID}.json`, JSON.stringify(cleanedData, null, 2), (err) => {
                        if (err) throw err;
                        console.log("Nuevos datos agregados");
                    });
                    //console.log('Parsed Response:', cleanedData);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            });
        });
        req.on('error', (error) => {
            console.error('Error:', error);
        });

        req.end();
    });

}

former();
