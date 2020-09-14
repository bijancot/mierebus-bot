module.exports = function() {
 this.menu = function() { //Menu Utama
    return 'Halo selamat datang! ini menu kami\n1. Kerjasama'
    }; 
 this.kerjasama = function() {
    return '\n1.Pasang iklan \n2.Media partner \n3.Publikasi'
    }; //Menu
 this.pasangiklan = function() {
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
 this.punyakonten = function(){
    return 'Apakah anda ingin melihat list harga? \n1. Iya \nTidak'
 };
 this.Tidakpunyakonten = function(){
    return 'Hai, untuk melakukan proses kerjasama iklan silahkan menghubungi kontak dibawah ini.\n Salam hangat TIMES Indonesia :)'
 };

 this.skmediapartner = function(){
     return 'Apabila kamu telah menyetujui syarat dan ketentuan menjadi media partner di TIMES Indonesia kamu boleh langsung membawa proposal nya ke kantor kami ya.\n Terima kasih :)'
 };

}
 