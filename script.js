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
  let popUpVideoOptions = {
    markup:
      '<div class="mfp-iframe-scaler" style="position:static;padding:0;height:auto;">' +
      '<div class="mfp-close"></div>' +
      '<video class="mfp-iframe" style="width:100%;height:100%;" controls autoplay></video>' +
      '<div class="mfp-title"></div>' +
      "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

    srcAction: "iframe_src",
    titleSrc: "data-title",
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
  $("#carousel4 .lightbox-link").magnificPopup({
    type: "iframe",
    gallery: {
      enabled: true,
    },
    iframe: popUpVideoOptions,
  });

  $("#carousel4 .lightbox-link").on(
    "mfpMarkupParse",
    function (template, values, item) {
      const targetEl = $.magnificPopup.instance.currItem.el;

      values.find(".mfp-title").html($(targetEl).attr("data-title"));
    }
  );
});