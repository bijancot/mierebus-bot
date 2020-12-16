let Parser = require('rss-parser');
let parser = new Parser();
// const { getBerita } = require('./cek.js');

// var asd = getBerita();

const getNews = async () =>{
  let feed = await parser.parseURL('https://www.timesindonesia.co.id/feed/all');
  return feed;
}

const mainyuk = async () =>{
  const result = await getNews();
  return result;
}
(async () => {
var hasil="";
var res = await mainyuk();
var i=0;
    for(i=0;i<10;i++){
        hasil += res.items[i].title + ':' + res.items[i].link+"\n";
    }
    console.log(hasil);
})()
