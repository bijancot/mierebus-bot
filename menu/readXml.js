const https = require('https');
const xml2js =  require('xml2js');
const parser = new xml2js.Parser({explicitArray:false, mergeAttrs : false});

let res;
var news = {
    dato : "kosong",
  
    set getRss(value) {
      this.dato = value;
    }
  };
  
// module.exports = function() {
//     this.getBerita = function(){
        let req = https.get("https://www.timesindonesia.co.id/feed/all", function(res) {
            let data = '';
            let asd = '';
            let hasillain = '';

            res.on('data', function(stream) {
                data += stream;  
            asd = data.item;
            news.dato = data;
            });

            res.on('end', function(){
                parser.parseString(data, function(error, result) {
                    
                    if(error === null) {     

                    var i=0;
                    for(i=0;i<10;i++){
                        hasillain += '*'+result.rss.channel.item[i].title+'* \n'+result.rss.channel.item[i].guid+'\n\n' ;
                    }
                        // news.getRss = result.rss.channel.item;
                        // headerB = headerBeritaTerbaru();
                        // footer = footerBeritaTerbaru();
                        // isichat = hasillain;           
                        // message.reply(isichat);
                        
                    }
                    else {
                        console.table(error)
                    }
                });
            });
        });
        // console.log(yolo);
        console.log(news.dato);
//     };
// };
// return module.exports;