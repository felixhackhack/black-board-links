function createHtml(jsonData) {
    var htmlString=`
        <title>home</title>
        <link rel="stylesheet" href="style.css">
        <body>
    `;
    (Object.keys(jsonData)).forEach( groupKey => {
        htmlString += `
        <ul>
        <li><h1>${groupKey.substr(2,groupKey.length)}</h1></li>`;

        jsonData[groupKey].forEach( item => {
            htmlString += `
            <li><a href="${item.url}">${item.name}</a></li>`;
        });
        htmlString += `
        </ul>
        `;
    })

    htmlString+=`
        </body>
    `;
    return htmlString;
}

module.exports = createHtml;
