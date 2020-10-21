function getGroupNames(requestData){
    var groupNames = [];
    requestData.forEach(e => {
        var xValue = e.fields.group[0];

        if(groupNames.indexOf(xValue) == -1){
            groupNames.push(xValue)
        }
    });
    return groupNames.sort();
}
module.exports = getGroupNames;