
module.exports = function() {

this.menu = function() { //Menu Utama
    return 'Kamu bisa memilih salah satu menu dibawah ini\n 1. Berita terbaru. \n*Langganan e-Koran* \n 2. Daftar langganan (Daftar) \n 3. Berhenti langganan (Batal). \n*Beriklan Bersama Kami.* \n 4. Info Kontak Marketing (Kontak) \n 5. Cek Front Office TIMES Indonesia (Front office). \n 99. Kembali ke menu awal'
};
this.langganan = function() { //Menu langganan e-koran
   return 'Selamat datang dilangganan e-Koran. \nUntuk melanjutkan silahkan memilih menu dibawah ini \n\n4. Daftar langganan (Daftar) \n5. Berhenti langganan (Batal)\n\n'
};

//submenu langganan daftar
this.daftarLangganan = function() { //Menu langganan e-koran
   return 'Untuk berlangganan silahkan ketik *REG#nama#NomorHandPhone#alamat email \n\n Contoh : *REG#Monica#085220847273#hore@gmail.com*\n\n'
};

//submenu langganan cek status
this.cekStatusLangganan = function() { //Menu cek status langganan
   return 'Status langganan anda adalah : \n\n'
};

//submenu langganan berhenti 
this.batalLangganan = function() { //Menu langganan e-koran
   return 'Untuk berhenti berlangganan, silahkan ketik *UNREG*\n\n'
}; 

this.cariBerita = function() { //Menu cari berita
   return 'Silahkan masukkan kata kunci berita yang ingin kamu cari\n\n'
   }; 
this.iklan = function(){ // Menu iklan
   return 'Yuk, Beriklan bersama kami. Untuk memulai silahkan pilih menu dibawah ini : \n\n6. Info Kontak Marketing (Kontak)\n7.  Cek Front Office TIMES Indonesia (Front office)'
   }; 
this.kontakMarketing =  function(){
   return 'halo, untuk memasang iklan silahkan hubungi kontak marketing kami dibawah ini\n\n'
   }; //submenu kontak marketing
this.cekSlot =  function(){
   return 'Ini adalah daftar slot iklan kami :)\n\n'
   }; //submenu slot iklan
this.cekFrontOffice =  function(){
   return 'Halo ini adalah Front Office TIMES Indonesia\n\n'
   }; //submenu kontak marketing

 //Struktur Chat

 this.header = function(){
   return "\nHai!\nAda yang bisa *mierebus-bot* bantu?\n\n";
 };

 this.headerBeritaTerbaru = function(){
   return "Dari kami khusus untuk kamu, ini 10 berita terbaru hari ini :\n\n";
 };

 this.footerBeritaTerbaru = function(){
   return "\nMau tau lebih banyak? yuk kunjungi timesindonesia.co.id";
 };

 this.footerDefault = function(){
   return "\n\nJangan lupa simpan nomor ini dan kunjungi website kami\n\n Salam hangat timesindonesia.co.id :D\n";
 };
 
}
return module.exports;
 