$(document).ready(function () {
  // to make our patients section into slider
  $(".patients-slider").slick({
    slidesToShow: 6,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //  to make latest news section into slider
  $(".news-slider").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
