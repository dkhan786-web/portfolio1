

// Typed.js Script
var typed = new Typed('.animate', {
    strings: [
      "DESIGNER",
      "DEVELOPER"
    ],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });

  // Slick Carousel Animation Script
  $(document).ready(function () {
    $('.client-logo-area').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pouseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }]
    });
  });