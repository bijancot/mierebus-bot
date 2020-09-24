
module.exports = function() {

this.menu = function() { //Menu Utama
    return 'Halo selamat datang! ini menu kami\n1. Kerjasama'
};
 this.pasangIklan = function() {
    return 'Apakah anda telah memiliki materi konten berupa gambar dan text.\n1.Punya \n2. Tidak punya'
    }; //Submenu
 this.mediapartner = function(){
    return 'Untuk menjadi media partner kami silahkan cek syarat dan ketentuannya dibawah ini ya :)'
    }; //submenu
 this.publikasi =  function(){
    return 'Kamu mau pilih publikasi untuk kegiatan apa?\n 1.Publikasi komersil\n2. Publikasi non komersil(kegiatan sosial)'
    }; //submenu
 this.footer = function(){
    return 'untuk memilih menu ketik sesuai nomor menu yang diinginkan'
    };

 // isi sub menu
 this.punyaKonten = function(){
    return 'Apakah anda ingin melihat list harga? \n1. Iya \nTidak'
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
   return "halo! jangan lupa kunjungi :\n";
 };

 this.headerBeritaTerbaru = function(){
   return "Dari kami khusus untuk kamu, ini 10 berita terbaru hari ini :\n";
 };

 this.footerBeritaTerbaru = function(){
   return "\nMau tau lebih banyak? yuk kunjungi timesindonesia.co.id";
 };

 this.footerDefault = function(){
   return "\nterimakasih!\n*mierebus-bot*\n\nNgobrol Yuk! ketik *halo* untuk memulai percakapan";
 };


}
return module.exports;
 