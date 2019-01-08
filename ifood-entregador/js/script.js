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
        },

        1931: {
          items:5,
          stagePadding: 160,
          margin: 20
        }
    } 
  });

  $(".cover-arrow").click(function(event){
    event.preventDefault();
    $("html, body").animate({
      scrollTop:$(".topics-section").offset().top},"slow");
  });

});

AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 250, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-top', // defines which position of the element regarding to window should trigger the animation

});
