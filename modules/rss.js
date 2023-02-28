const { parse } = require('rss-to-json');

module.exports = async function (client) {
    (async () => {

        var rss = await parse('https://www.tagesschau.de/xml/rss2/')

        JSON.parse(rss).forEach(element => {
            console.log(element + "element")
            if(String(element.link).includes("eilmeldung")) {
                console.log("!!!Eilmeldung gefunden: " + element.link)
            }
        });
    
    })();
};