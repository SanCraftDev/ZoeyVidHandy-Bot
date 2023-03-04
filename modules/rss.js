const { extract } = require('@extractus/feed-extractor')

module.exports = async function (client) {
        console.log("RSS-Modul geladen")
        client.channels.fetch('947182443637653555')
        var tagesschauChannel = client.channels.cache.get('947182443637653555');
        tagesschauChannel.send("RSS-Modul geladen")
        var rss = await extract('https://www.tagesschau.de/xml/rss2/')
        rss.entries.forEach(element => {
            if(String(element.link).includes("eilmeldung")) {
                console.log("!!!Eilmeldung gefunden: " + element.link)
            }
        });
};