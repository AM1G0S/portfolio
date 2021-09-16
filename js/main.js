$(function () {

  $(".menu, .hero__content, .footer, .header__inner").on("click", "a", function (event) {
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
  var header = $('.header');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      header.addClass('header--fixed');
    } else {
      header.removeClass('header--fixed');
    }
  });
  // </Липкий хедер>

  // Кнопка вверх
  var btn = $('#arrow-top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      btn.addClass('arrow-top--show');
    } else {
      btn.removeClass('arrow-top--show');
    }
  });
  // </Кнопка вверх>


  var mixer = mixitup(".portfolio__content");

});
