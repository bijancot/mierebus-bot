require('./menu/awal.js')();
const qrcode = require('qrcode-terminal');
const http = require('http');
const app = require('express');
var apo = app();
const { Client } = require('whatsapp-web.js');
const client = new Client();
const port = 3000;
const https = require('https');
const xml2js =  require('xml2js');
const parser = new xml2js.Parser({explicitArray:false, mergeAttrs : false});
const number = [62895326927698,6285238909939,6281231285592];
var hehe;

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
        
        if(message.body === '!beritaterbaru'){
            let req = https.get("https://www.timesindonesia.co.id/feed/all", function(res) {
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
                    var hasillain='';
                    for(i=0;i<10;i++){
                    hasillain += '*'+result.rss.channel.item[i].title+'* \n'+result.rss.channel.item[i].guid+'\n\n' ;
                    }
                    header = headerBeritaTerbaru();
                    footer = footerBeritaTerbaru()+footerDefault();
                    isichat = header+hasillain+footer;
                    message.reply(isichat);
                        }
                        else {
                            console.table(error);
                        }
                    });
                });
            });
        }

        // kerjasama();

        // case "pasang iklan" :
        //     message.reply(pasangiklan());
        // break;

        // case "media partner" :
        //     message.reply(mediapartner());
        // break;

        // case "publikasi" :
        //     message.reply(publikasi());
        // break;

        // default :
        // var content = "hmm mungkin masksud kamu :\n"+menu();
        // message.reply(content);
        // break;
        });

apo.get('/sendbynum', function (req, res) {
    var haha = req.query.body;
    var no = req.query.no+'@c.us';
    console.log(no);
    client.sendMessage(no,haha);
    res.end();
});

apo.get('/sendbatch', function (req, res){
    var urlberita = req.query.urlBerita;
    var header = header();
    var konten = urlberita;
    var footer = footerDefault();
    var chat = header+konten+footer;

for (i = 0; i < number.length; i++) {
	if(i<number.length){
	console.log(i);
	console.log(number.length);
	var newnumber = number[i]+'@c.us';
	client.sendMessage(newnumber, chat);
	}if(i==(number.length-1)){
	res.end();
	}
  }
});

client.initialize();

apo.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});