//event pada saat link di klik
$('.page-scroll').on('click', function(e){
    
    //ambil isi href
    var tujuan = $(this).attr('href');

    //tangkap element ybs
    var elemenTujuan = $(tujuan); 

    //console.log(elemenTujuan.offset().top); // => untuk mengetahui jarak antara body sampai ke atas / Top
    //console.log($('body').scrollTop()); // => untuk mengetahui scroll manual user ada di angka berapa

    //pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    },700, 'swing');
    e.preventDefault();
});