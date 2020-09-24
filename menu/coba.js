let Parser = require('rss-parser');
let parser = new Parser();
var isi;
(async () => {

  let feed = await parser.parseURL('https://www.timesindonesia.co.id/feed/all');
  // console.log(feed.title);

  feed.items.forEach(item => {
    isi = item.title + ':' + item.link;
  });

})();

console.log(isi);
