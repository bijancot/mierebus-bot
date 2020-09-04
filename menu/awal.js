module.exports = function() {
 this.menu = function() {return 'Halo selamat datang! ini menu kami\n1. Kerjasama'};
 this.kerjasama = function() {return '\n1.Pasang iklan \n2.Media partner \3.Publikasi'};
 this.pasangiklan = function() {return 'Apakah anda telah memilik materi konten berupa gambar dan text.\n1.Punya \n2. Tidak'};
 this.mediapartner = function(){return 'Hai, untuk memasang iklan di TIMES kamu boleh langsung membawa proposal nya ke kantor kami ya.\n Terima kasih :)'};
 this.publikasi =  function(){return 'Kamu mau pilih publikasi untuk kegiatan apa?\n 1.Publikasi komersil\n2. Publikasi non komersil(kegiatan sosial)'};
 this.footer = function(){return 'untuk memilih menu ketik sesuai nomor menu yang diinginkan'};
}
