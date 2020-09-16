const { Client } = require('whatsapp-web.js');
const http = require('https');
const xml2js =  require('xml2js');
const client = new Client();
const parser = new xml2js.Parser({explicitArray:false, mergeAttrs : false});

let req = http.get("https://www.timesindonesia.co.id/feed/all", function(res) {
    let data = '';
    let asd = '';
    res.on('data', function(stream) {
        data += stream;
	asd = data.item;
    });
    res.on('end', function(){
        parser.parseString(data, function(error, result) {
            if(error === null) {
                var hasil = result;
		var i=0;
		for(i=0;i<10;i++){
		console.log(result.rss.channel.item[i].guid);
		}
            }
            else {
                console.log(error);
            }
        });
    });
});