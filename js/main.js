$(function(){
  $('.slider').slick({
    arrows: true,
    asNavFor: '.thumbs'
  });
  $('.thumbs').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider',
    focusOnSelect: true
  });
});