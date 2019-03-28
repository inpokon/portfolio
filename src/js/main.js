import './vendor';

require ('./vendor/slick.min.js');

$(document).ready(function () {
   console.log('ok');
   $('.skills__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrow: true,
      centerMode: true,
      variableWidth: true
   });
});