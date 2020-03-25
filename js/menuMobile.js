const menuOpen = document.querySelector('.header__burger');
const menuMobile = document.querySelector('.header__mobile');

menuOpen.addEventListener('click', function(){
    if(menuMobile.classList.contains('header__mobile--closed')){
        menuMobile.classList.remove('header__mobile--closed');
         menuMobile.classList.add('header__mobile--opened');
    } else if(menuMobile.classList.contains('header__mobile--opened')){
        menuMobile.classList.remove('header__mobile--opened');
         menuMobile.classList.add('header__mobile--closed');
    }
    
});

const menuOpenSearch = document.querySelector('.header__burger--search');
const menuMobileSearch = document.querySelector('.header__mobile--search');

menuOpenSearch.addEventListener('click', function(){
    if(menuMobileSearch.classList.contains('header__mobile--closed')){
        menuMobileSearch.classList.remove('header__mobile--closed');
         menuMobileSearch.classList.add('header__mobile--opened');
    } else if(menuMobileSearch.classList.contains('header__mobile--opened')){
        menuMobileSearch.classList.remove('header__mobile--opened');
         menuMobileSearch.classList.add('header__mobile--closed');
    }
    
});