const { parse } = require('rss-to-json');

module.exports = async function (client) {
    (async () => {

        var rss = await parse('https://www.tagesschau.de/xml/rss2/')
    
        var rssJSON = JSON.stringify(rss)

        Object.keys(rssJSON).forEach(element => {
            console.log(rssJSON[element] + "raw")
            console.log(element + "element")
            if(String(rssJSON[element].link).includes("eilmeldung")) {
                console.log("!!!Eilmeldung gefunden: " + rssJSON[element].link)
            }
        });
    
    })();
};