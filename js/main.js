$(function () {

  $(".menu, .header__content, .footer").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  $('.burger').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.burger').toggleClass('burger--open');
    $('body').toggleClass('scroll-lock');
  });

  $('.menu__link').on('click', function () {
    $('.menu').removeClass('menu--active');
    $('.burger').removeClass('burger--open');
    $('body').removeClass('scroll-lock');
  });


  // Липкий хедер
  var header = $('.header__top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 140) {
      header.addClass('header__top--fixed');
    } else {
      header.removeClass('header__top--fixed');
    }
  });
  // </Липкий хедер>

  // Кнопка вверх
  var btn = $('#arrow-top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
      btn.addClass('arrow-top--show');
    } else {
      btn.removeClass('arrow-top--show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
  // </Кнопка вверх>


  var mixer = mixitup(".portfolio__content");

});
