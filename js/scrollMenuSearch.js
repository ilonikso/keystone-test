
window.onscroll = function() {scrollFunction2()};

function scrollFunction2() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
      document.querySelector('.help-center-search__scroll').classList.add('help-center-search__scroll--visible');
       
  } else {
      document.querySelector('.help-center-search__scroll').classList.remove('help-center-search__scroll--visible');
       
  }
}
