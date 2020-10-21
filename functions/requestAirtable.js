const AirtablePlus = require('airtable-plus');
require('dotenv').config()


async function requestAirtable(tableName) {
    
    const airtable = new AirtablePlus({
        baseID: process.env.BASE_NAME,
        apiKey: process.env.API_KEY,
        tableName: tableName,
    });
    
    try {
        const readRes = await airtable.read({
            maxRecords: 100,
            sort: [{field: 'index', direction: "desc"}]
        });
        return readRes;
    }
    catch(e) {
        console.error(e);
    }
};

module.exports = requestAirtable;
