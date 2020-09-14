//import { menu } from './menu/awal.js'
//const menuAwal = menu();
//var fs = require('fs');
//var menuku = eval(fs.readFileSync('./menu/awal.js')+'');
require('./menu/awal.js')();
const qrcode = require('qrcode-terminal');
const http = require('http');
const app = require('express');
//import { menu } from './menu/awal.js'
var apo = app();
const { Client } = require('whatsapp-web.js');
const client = new Client();
const port = 3000;
const number = [62895326927698,6285238909939,6281231285592];

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    console.log(message.body);
});

client.on('message', message => {
    // if(message.body === 'Halo' ||message.body === 'halo'){
    //     message.reply(menu());
    // if(message.body === 'Halo' ||message.body === 'halo'){
    //     message.reply(menu());

    // }
    if(message.body === 'Kerjasama' ||message.body === 'kerjasama'){
                    message.reply(kerjasama());
                    
                } else if(message.body === 'Pasang iklan' ||message.body === 'pasang iklan'){
                    message.reply(pasangiklan());
                } else if(message.body === 'Media partner' ||message.body === 'media partner'){
                    message.reply(mediapartner());
                } else if(message.body === 'Publikasi' ||message.body === 'publikasi'){
                    message.reply(publikasi());
                } else if (message.body === 'selesai'||message.body === 'selesai'){
                    client.sendMessage(message.from, 'okk');
                }
                else{
                    var content = "hmm mungkin masksud kamu :\n"+menu();
                    message.reply(content);
                    // message.end;
                }
             
            
        });
//         

//         message.reply(menu());
//         if(message.body === 'Kerjasama' ||message.body === 'kerjasama'){
//             message.reply(kerjasama());
//                 switch(message.reply(kerjasama())){
//                     case 1:
//                         message.reply(pasangiklan());
//                         break;
//                     case 2:
//                         message.reply(mediapartner());
//                         break;
//                     case 3:
//                         message.reply(mediapartner());
//                         break;
//                     default:
//                         message.reply('menu yang ada : hehhe');
//                         break;

//                 } 
//         }
//     }
// });


apo.get('/sendbynum', function (req, res) {
    var haha = req.query.body;
    var no = req.query.no+'@c.us';
    console.log(no);
    client.sendMessage(no,haha);
    res.end();
});

apo.get('/sendbatch', function (req, res){
    var urlberita = req.query.urlBerita;
    var header = "halo! jangan lupa kunjungi :\n";
    var konten = urlberita;
    var footer = "\nterimakasih!\n*mierebus-bot*\n\nNgobrol Yuk! ketik *halo* untuk memulai percakapan";
    var chat = header+konten+footer;
    //api tobe here
    //looping ap
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
