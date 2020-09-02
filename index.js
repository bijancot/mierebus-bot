const qrcode = require('qrcode-terminal');
const http = require('http');
//var express_1 = __importDefault(require("express"));
const app = require('express');
var apo = app();
const { Client } = require('whatsapp-web.js');
const client = new Client();
var port = 3000;

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    client.sendMessage('62895326927698@c.us','pong');
    client.sendMessage('6282334059230@c.us','pong');
});

client.on('message', message => {
    console.log(message.body);
});

//client.on('message', message => {
//    if(message.body === '!ping') {
//      message.reply('pong');
//    }else{
//      message.reply('hai! kunjungi\n https://tjireng.my.id/');
//    }
//});

client.on('message', message => {
	if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
		console.log(message.from);
	}else{
      message.reply('hai! kunjungi\n https://tjireng.my.id/');
    }

});
apo.get('/send', function (req, res) {
    //res.sendFile('/media/budosen/1b6c4b7b-c7f7-423f-8b12-9783acdaf266/Me/work/PKL/chatbot/pages/asd.html');
    client.sendMessage('62895326927698@c.us','pong');
    client.sendMessage('6282334059230@c.us','pong');
});

client.initialize();

//http.listen(3000, function () { return 200});
apo.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
