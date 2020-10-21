fs = require('fs');

const requestAirtable = require("./functions/requestAirtable")
const getGroupNames = require("./functions/getGroupNames")
const provideJson = require("./functions/provideJson")
const createHtml = require("./functions/createHtml")


main();
async function main (){
    var rawData = await requestAirtable("links");

    var groupNames = getGroupNames(rawData);

    var jsonData = provideJson(groupNames, rawData);

    var html = createHtml(jsonData);

    fs.writeFile('./public/index.html', html, (err) => {
        if (err) return console.log(err);
      });
}







