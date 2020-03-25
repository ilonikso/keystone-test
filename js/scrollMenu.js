
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("header").classList.add('page__header--home-scroll');
       document.getElementById("project-list").classList.add('project-list--scroll');
      document.getElementById("menu-title").classList.add('header__menu-title--visible');
  } else {
      document.getElementById("header").classList.remove('page__header--home-scroll');
       document.getElementById("project-list").classList.remove('project-list--scroll');
      document.getElementById("menu-title").classList.remove('header__menu-title--visible');
  }
}
