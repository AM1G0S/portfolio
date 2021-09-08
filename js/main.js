$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $(this).toggleClass('open');
  });

  var mixer = mixitup(".portfolio__content");

});
