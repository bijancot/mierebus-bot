require('./menu/functionMenu.js')();
const { getBerita } = require('./menu/cek.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const qrcodeweb = require('qrcode');
const http = require('http');
var mysql = require('mysql');
const app = require('express');
var apo = app();
const { Client } = require('whatsapp-web.js');
const client = new Client();
const port = 3000;
const number = [62895326927698,6285238909939];
let Parser = require('rss-parser');
let parser = new Parser();


var hehe;

var con;

  var db_config = {
    host: "diwangkara.dev",
        user: "admin_pkl",
        password: "1sampaipkl",
        database: "admin_pkl"
  };
  
  var con;
  
  function handleDisconnect() {
    con = mysql.createConnection(db_config); // Recreate the connection, since
                                                    // the old one cannot be reused.
  
    con.connect(function(err) {              // The server is either down
      if(err) {                                     // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
      }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    con.on('error', function(err) {
    //   console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        handleDisconnect();                         // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
  }
  
  handleDisconnect();

client.on('qr', qr => {
    hehe = qr;
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
        
        if(message.body == 'halo' || message.body == 'Halo' || message.body == 99){
            balas = header()+'\n'+menu()+'\n\n'+footerDefault();
            message.reply(balas);

        }else if(message.body == 'ekoran terbaru' || message.body == 'eKoran Terbaru' || message.body == 2){
            pesanEkoran = ekoran()+'\n'+footerDefault();
            message.reply(pesanEkoran);
            console.log(message.body)

        }else if(message.body == 'kopitimes' || message.body == 'Kopitimes' || message.body == 3){
            pesanKopi = kopitimes()+'\n'+footerDefault();
            message.reply(pesanKopi);
            console.log(message.body)
      
        } else if(message.body == 'AJP' || message.body == 'ajp' || message.body == 4){
          daftarLink = "link isi form ajp";
          balas = daftarLink +'\n\n99. Kembali ke menu awal.\n\n';
          message.reply(balas);
          console.log(message.body);

        }else if(message.body == 'DJ' || message.body == 'dj' || message.body == 5){
          daftarLink = "link isi form dj";
          balas = daftarLink +'\n\n99. Kembali ke menu awal.\n\n';
          message.reply(balas);
          console.log(message.body);

        }else if(message.body == 'BISA (Indonesia Bangkit)' || message.body == 'BISA' || message.body == 'bisa'  || message.body == 6){
          daftarLink = "link isi form";
          balas = daftarLink +'\n\n99. Kembali ke menu awal.\n\n';
          message.reply(balas);
          console.log(message.body);
        }
        else if(message.body == 'TIMES Indonesia' || message.body == 'times indonesia' || message.body == 'Times Indonesia' || message.body == 7){
          daftarLink = 't.me/timesindonesia';
          pesan = "Silahkan klik ";
          balas = pesan+daftarLink +'\n\n99. Kembali ke menu awal.\n\n';
          message.reply(balas);
          console.log(message.body);
        }

        else if(message.body == 'eKoran' || message.body == 'ekoran' || message.body == 8){
          daftarLink = 't.me/ekorantimes';
          pesan = "Silahkan klik ";
          balas = pesan+daftarLink +'\n\n99. Kembali ke menu awal.\n\n';
          message.reply(balas);
          console.log(message.body);
        }

        else if(message.body == 'Kopi TIMES' || message.body == 'Kopi Times'|| message.body == 'kopi times' || message.body == 9){
          daftarLink = 't.me/kopitimes';
          pesan = "Silahkan klik ";
          balas = pesan+daftarLink +'\n\n99. Kembali ke menu awal.\n\n';
          message.reply(balas);
          console.log(message.body);
        }


        else if(message.body == 'Kontak' || message.body == 'kontak' || message.body == 10){
            cp = "0341563566"; 
            kontak = kontakMarketing()+'\n'+cp+'\n\n'+footerBeritaTerbaru();
            message.reply(kontak);

        }
        else if(message.body == 'front office' || message.body == 'Front office' || message.body == 'Front Office' || message.body == 11){
            frontOf = "*WISMA MAS ISMAN*\n\nJalan Teuku Cik Ditiro No.34 Menteng Jakarta Pusat 10310.\nTelp/Fax (021) 21394119.\nEmail: redaksi@timesindonesia.co.id (khusus redaksi),\nads@timesindonesia.co.id (khusus iklan)\n\n 99. Kembali ke menu awal.\n\n"
            pb =  cekFrontOffice()+'\n\n'+frontOf+'\n\n'+footerBeritaTerbaru();
            message.reply(pb);

        }else if(message.body.split("#")[0]=="REG"){
            // console.log(message.body);
            var pendaftaran = message.body;
            var reso = pendaftaran.split("#");
            reso.shift();
            // console.log(reso);
            reso.push('1');

            con.connect(function(err) {
                // if (err) throw err;
                console.log("Connected!");
                var sql = "INSERT INTO pelanggan (nama_pelanggan, notelp, email, status) VALUES (?)";
                con.query(sql, [reso], function (err, result) {
                  if (err) throw err;
                  console.log("Number of records inserted: " + result.affectedRows);
                  message.reply('Selamat anda telah terdaftar!');
                  balas = header()+'\n'+menu()+'\n\n'+footerDefault();
                  message.reply(balas);

                });
              });
        }else if(message.body.split("#")[0]=="UNREG"){
            var pendaftaran = message.body;
            var reso = pendaftaran.split("#");
            reso.shift();

            con.connect(function(err) {
                console.log("Connected!");
                var sql = "UPDATE pelanggan set status='2' where notelp=?";
                con.query(sql, [reso], function (err, result) {
                  if (err) throw err;
                  console.log("Number of records inserted: " + result.affectedRows);
                  message.reply('Sangat menyenangkan sempat menjadi bagian dari hari anda, terimakasih!');
                });
              });
        }else if(message.body == 'berita terbaru' || message.body == 'Berita terbaru' || message.body == 1 || message.body == 'Berita Terbaru'){
          // berita = getBerita();
          // message.reply(berita)
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
              for(i=0;i<5;i++){
                  hasil = res.items[i].title + ':' + res.items[i].link+"\n";
		  message.reply(hasil);
              }
              
          })()
       }
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

apo.get('/getqr', function (req, res) {
    //console.log(hehe);
    run().catch(error => console.error(error.stack));

async function run() {
  const ros = await qrcodeweb.toDataURL(hehe);

  fs.writeFileSync('./qr.html', `<img src="${ros}">`);
  console.log('Wrote to ./qr.html');
}
//var asd = '<img src='+ros+'>';
console.log('./qr.html');
res.sendFile('/home/admin/web/diwangkara.dev/public_html/mierebus_node/qr.html');
});

client.initialize();

apo.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
