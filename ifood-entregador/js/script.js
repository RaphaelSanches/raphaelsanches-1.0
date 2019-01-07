$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav: true,
    navText: ["<img src='img/arrow-left.svg'>","<img src='img/arrow-right.svg'>"],
    responsive:{
        0:{
            items:1,
            stagePadding: 40,
            margin: 25,
            center: true,
        },
        901: {
          items:3,
          stagePadding: 80,
          margin: 20,
        },

        1401: {
          items:4,
          stagePadding: 80,
          margin: 20,
        }
    }
  });
});
