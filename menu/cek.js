module.exports.getBerita = async function(){
    await mainyuk();
};

let Parser = require('rss-parser');
let parser = new Parser();

// async function getNews() {
   
//     let feed = await parser.parseURL('https://www.timesindonesia.co.id/feed/all');
//     // console.log(feed)
//     var i=0;
//     for(i=2;i<11;i++){
//         hasil += feed.items[i].title + ':' + feed.items[i].link+"\n";
//     }
//     return hasil;
// }

const getNews = async () =>{
    let feed = await parser.parseURL('https://www.timesindonesia.co.id/feed/all');
    return feed;
}

const mainyuk = async () =>{
    const result = await getNews();
    return result;
}
(async () => {
    console.log(await mainyuk())
  })()
  

// (async () => {
// asde = getNews();
// asde.then(function(result){
//     i=0;
//     for(i=2;i<11;i++){
//         hasil += result[i].title + ':' + result[i].link+"\n";
//     }
//     console.log(hasil);
// })
// })();

