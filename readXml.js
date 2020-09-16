const http = require('https');
const xml2js =  require('xml2js');
const parser = new xml2js.Parser({attrkey:"ATTR"});

let req = http.get("https://www.timesindonesia.co.id/feed/all", function(res) {
    let data = '';
    res.on('data', function(stream) {
        data += stream;
    });
    res.on('end', function(){
        parser.parseString(data, function(error, result) {
            if(error === null) {
                var hasil = result.channel;
                console.log(hasil.title);
            }
            else {
                console.log(error);
            }
        });
    });
});