
module.exports = function() {

this.menu = function() { //Menu Utama
    return '*Berita Terbaru*\n1. Berita TIMES Indonesia Terbaru\n2. eKoran Terbaru.\n3. Kopitimes Terbaru\n\n*Citizen Journalist*\n4. AJP (Aplikasi jurnalisme Positif) *AJP*.\n5. DJ (Digital Journalist) *DJ*.\n6. BISA (Indonesia Bangkit) *BISA*.\n\n*Langganan Konten (*GRATIS*)*\n7. TIMES Indonesia. \n8. eKoran.\n\9. Kopi TIMES (Opini)\n\n*Beriklan Bersama Kami*\n10. Info Kontak Marketing (Kontak)\n11. Cek Front Office TIMES Indonesia (Front office).'
};
this.ekoran = function() { //Menu langganan e-koran
   return 'Dari kami khusus untuk kamu, ini 5 eKoran terbaru hari ini :\n\n'
};


this.kopitimes = function() { //Menu langganan e-koran
   return 'Dari kami khusus untuk kamu, ini 5 eKoran terbaru hari ini :\n\n'
};

//submenu langganan daftar
// this.daftarLangganan = function() { //Menu langganan e-koran
//    return 'Untuk berlangganan silahkan ketik *REG#nama#NomorHandPhone#alamat email \n\n Contoh : *REG#Monica#085220847273#hore@gmail.com*\n\n99. Kembali ke menu awal.\n\n'
// };

//submenu langganan berhenti 
// this.batalLangganan = function() { //Menu langganan e-koran 
//    return 'Untuk berhenti berlangganan, silahkan ketik *UNREG*\n\n 99. Kembali ke menu awal.\n\n'
// }; 

this.iklan = function(){ // Menu iklan
   return 'Yuk, Beriklan bersama kami. Untuk memulai silahkan pilih menu dibawah ini : \n\n6. Info Kontak Marketing (Kontak)\n7.  Cek Front Office TIMES Indonesia (Front office).\n\n'
   }; 
this.kontakMarketing =  function(){
   return 'halo, untuk memasang iklan silahkan hubungi kontak marketing kami dibawah ini\n'
   }; 
this.cekFrontOffice =  function(){
   return 'Halo ini adalah Front Office TIMES Indonesia\n\n'
   }; //submenu kontak marketing


 this.header = function(){
   return "\nHai!\nAda yang bisa kami bantu?\n\n";
 };

 this.headerBeritaTerbaru = function(){
   return "Dari kami khusus untuk kamu, ini 5 berita terbaru hari ini :\n\n";
 };

 this.footerBeritaTerbaru = function(){
   return "\nMau tau lebih banyak? yuk kunjungi timesindonesia.co.id";
 };

 this.footerDefault = function(){
   return "\n\nJangan lupa follow instagram kami di @timesindonesia, facebook kami di @timesindonesia.co.id, youtube kami di @timestv dan twitter di @timescoid\n";
 };
 
}
return module.exports;
 