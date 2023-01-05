
$(document).ready(function () {
    $(".all1").owlCarousel({
      loop: true,
      navigation: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      items: 3,
      mousewheel: false,
      dots: true,
      slideBy: 1,
      
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        200: {
          items: 1,
          nav: false,
        },
        300: {
          items: 1,
          nav: false,
        },
        400: {
          items: 1,
          nav: false,
        },
        700: {
          items: 1,
          nav: false,
        },
        900: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
          loop: true,
        },
      },
    });
  });



  
jQuery(document).ready(function($) {
  $("#menu").mmenu({
      "extensions": ["effect-menu-zoom", "effect-panels-zoom", "pagedim-black", "theme-dark"],
      "offCanvas": {
          "position": "left"
      },
      "counters": true,
      "iconPanels": true,
      "navbars": [{
          "position": "top"
      }]
  });
});


$(".gototop").on("click", function () {
  scroll({
    top: 0,
  });
});
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll >= 1000) {
    $(".gototop").addClass("back_to_top");
  } else {
    $(".gototop").removeClass("back_to_top");
  }
});


