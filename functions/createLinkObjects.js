async function createLinkObjects(jsonData) {

    var allObjects = [];
    await jsonData.forEach(item => {
        var tmpObject = {
            name: item.fields.name,
            url: item.fields.url,
            group: item.fields.group[0]
        }

        allObjects.push(tmpObject);
    });
    return allObjects;
}

module.exports = createLinkObjects;