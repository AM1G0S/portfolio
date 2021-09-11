$(function () {

  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  $('.burger, .menu__link').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.burger').toggleClass('burger--open');
  });

  var mixer = mixitup(".portfolio__content");

});
