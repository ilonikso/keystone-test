$('.nav--project').mouseover(function(){
    $('.header__dropdown').show();
  });
$('.nav--project').mouseout(function(){
$('.header__dropdown').hide();
  });

$('.header__dropdown').mouseover(function(){
    $('.header__dropdown').show();
  });
$('.header__dropdown').mouseout(function(){
    $('.header__dropdown').hide();
  });

$('.header__login').click(function(){
    $('.popup').show();
  });
$('.popup__button-1').click(function(){
    $('.popup').hide();
  });

$('.account-portfolio__item-modal-container').mouseover(function(){
    $('.account-portfolio__item-modal').show();
  });

$('.account-portfolio__item-modal').mouseout(function(){
    $('.account-portfolio__item-modal').hide();
  });  

$('.account-portfolio__item-modal').mouseover(function(){
    $('.account-portfolio__item-modal').show();
  });

$('.account-portfolio__item-modal').mouseout(function(){
    $('.account-portfolio__item-modal').hide();
  });

$('.accessibility__button').click(function(){
    $('.accessibility__block').addClass(' accessibility__block--open');  $('.accessibility__block').removeClass('accessibility__block--close');
  });
$('.accessibility__close').click(function(){
    $('.accessibility__block').addClass('accessibility__block--close');  $('.accessibility__block').removeClass('accessibility__block--open');
  });

