$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    autoplay: true,
   autoplayTimeout: 5000,
   autoplayHoverPause: true,
   loop: true,
   margin: 70,
   responsiveClass: false,
   nav: true,
   loop: true,
   stagePadding: 410,
   responsive: {
     640: {
       items: 1,
       stagePadding: 10,
         margin: -40
     },
     1400: {
       items: 2,
       stagePadding: 410,
       margin: 70
     }
   }
 })
});
