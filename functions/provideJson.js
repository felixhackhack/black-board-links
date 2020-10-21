function provideJson(groupNames, rawData) {
    var groupList = {};

    groupNames.forEach(e => {
        groupList[e] = getItemsByGroup(e, rawData);
    })
    return groupList;
}

function getItemsByGroup(groupName, rawData) {
    var listOfLinks = [];

    rawData.forEach(e => {
        if(e.fields.group[0] === groupName){
            listOfLinks.push({
                name: e.fields.name,
                url: e.fields.url
            });
        }
    });
    return listOfLinks;
}

module.exports = provideJson;