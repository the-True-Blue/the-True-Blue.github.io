let stars = $("#stars");
let moon = $("#moon");
let mountains_behind = $("#mountains_behind");
let text = $("#text");
let mountains_front = $("#mountains_front");
$(window).on("scroll", function () {
  let targetEl = $(".section_parallax1-content");
  let posY = targetEl[0].getBoundingClientRect().y;
  let value = Math.abs(posY);
  if (value > targetEl[0].clientHeight || posY > 0) return false;
  stars.css({
    left: value * 0.25 + "px",
  });
  moon.css({
    top: value * 1.05 + "px",
  });
  mountains_behind.css({
    top: value * 0.5 + "px",
  });
  mountains_front.css({
    top: value * 0 + "px",
  });
  text.css({
    marginRight: value * 4 + "px",
    marginTop: value * 1.5 + "px",
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  let popUpImageOptions = {
    markup:
      '<div class="mfp-figure">' +
      '<div class="mfp-close"></div>' +
      '<div class="mfp-img"></div>' +
      '<div class="mfp-bottom-bar">' +
      '<div class="mfp-title"></div>' +
      "</div>" +
      "</div>",
    cursor: "mfp-zoom-out-cur",
    titleSrc: "data-title",
    verticalFit: true,
    tError: '<a href="%url%">The image</a> could not be loaded.',
  };
  $("#carousel1 .lightbox-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    image: popUpImageOptions,
  });
  $("#carousel2 .lightbox-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    image: popUpImageOptions,
  });
  $("#carousel3 .lightbox-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    image: popUpImageOptions,
  });
});
