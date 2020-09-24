const http = require('https');
const xml2js =  require('xml2js');
const parser = new xml2js.Parser({explicitArray:false, mergeAttrs : false});
var haha = '';
var hehe;
var hasul = '';
var hasillain;
var berita = '';
var asd = '';

// module.exports = function() {
//     this.getBerita = function(){
http.get("https://www.timesindonesia.co.id/feed/all",callback);
console.log(callback);
// console.log(berita);
// return huhu();
//     }
//  };
// return module.exports;