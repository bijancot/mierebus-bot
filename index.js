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
});

client.on('message', message => {
    console.log(message.body);
});

client.on('message', message => {
	if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
		console.log(message.from);
	}else{
      message.reply('hai! kunjungi\n https://tjireng.my.id/');
    }

});
apo.get('/sendbynum', function (req, res) {
    var haha = req.query.haha;
    var no = req.query.no+'@c.us';
    console.log(no);
    client.sendMessage(no,haha);
});

apo.get('sendbatch', function (req, res){
    var urlberita = req.query.urlBerita;
    //api tobe here
    //looping api
});

client.initialize();

apo.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
