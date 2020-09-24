const http = require('https');
const xml2js =  require('xml2js');
const parser = new xml2js.Parser({explicitArray:false, mergeAttrs : false});
var haha = '';
var hehe = '';
var hasul = '';
var hasillain;
var berita = '';

function huhu(param){
    this.hasul = param;
    return hasul;
}

module.exports = function() {
    this.getBerita = function(){
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
               
		var i=0;
		for(i=0;i<10;i++){
        hasillain = '*'+result.rss.channel.item[i].title+'* \n'+result.rss.channel.item[i].guid+'\n\n' ;
        hasul += hasillain;
		}
            }
            else {
                console.table(error);
            }
           haha = hasul;  
        });
        hehe = haha;
        huhu(hehe);
    });
});
// berita = ;
// huhu();
// console.log(berita);
return huhu();
    }
 };
return module.exports;