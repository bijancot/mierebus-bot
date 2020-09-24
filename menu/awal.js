
module.exports = function() {

this.menu = function() { //Menu Utama
    return 'Kamu bisa memilih salah satu menu dibawah ini\n1. Kerjasama\n2. Berita terbaru'
};
this.kerjasama = function() { //Menu Utama
   return 'Halo, kami memiliki berbagai tawaran kerjasama menarik nih untuk kamu.\n \n1. Pasang iklan.\n2. Media Partner.\n3. Publikasi.\n\n'
};
 this.pasangIklan = function() {
    return 'Untuk memasang iklan di Times Indonesia anda harus memiliki materi konten berupa gambar dan text.\n\n Apakah anda telah memiliki konten?\n1. Iya \n2. Tidak\n\n'
    }; //Submenu
 this.mediaPartner = function(){
    return 'Untuk menjadi media partner kami silahkan cek syarat dan ketentuannya dibawah ini ya :)'
    }; //submenu
 this.publikasi =  function(){
    return 'Kamu mau pilih publikasi untuk kegiatan apa?\n 1. Publikasi komersil\n2. Publikasi non komersil(kegiatan sosial)'
    }; //submenu
 this.footer = function(){
    return 'Silahkan ketik sesuai nama menu yang diinginkan ya'
    };

 // isi sub menu
 this.punyaKonten = function(){
    return 'Wah sepertinya anda sudah memiliki konten.\nIni nih yang perlu anda tahu sebelum memasang iklan di Times Indonesia\n1. List harga\n2. Keuntungan yang kamu dapat\n3. Batal'
 };
 this.tidakPunyaKonten = function(){
    return 'Hai, untuk melakukan proses kerjasama iklan silahkan menghubungi kontak dibawah ini.\n Salam hangat TIMES Indonesia :)'
 };
 this.skMediaPartner = function(){
     return 'Apabila kamu telah menyetujui syarat dan ketentuan menjadi media partner di TIMES Indonesia kamu boleh langsung membawa proposal nya ke kantor kami ya.\n Terima kasih :)'
 };

 // Permintaan Berita
 this.beritaTerbaru = function(){
      // berita = getBerita();
      // console.log(berita);
      // console.log(getBerita());
      return berita;
 };

this.cariBerita = function(){
   // List 10 Berita berdasarkan kata kunci
 };

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
   return "\n\nJangan lupa kunjungi website kami\n\n Salam hangat timesindonesia.co.id :D\n";
 };


}
return module.exports;
 