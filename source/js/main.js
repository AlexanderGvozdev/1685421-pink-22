var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var headerClosed = document.querySelector('.page-header');
var headerColor = document.querySelector('.page-header-color');

navMain.classList.remove('nav--nojs');
headerClosed.classList.add('page-header--closed');
headerColor.classList.add('page-header-color');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('nav--closed')) {
        navMain.classList.remove('nav--closed');
        headerClosed.classList.remove('page-header--closed');
        headerColor.classList.remove('page-header-color');
        navMain.classList.add('nav--opened');
    } else {
        navMain.classList.add('nav--closed');
        headerClosed.classList.add('page-header--closed');
        headerColor.classList.add('page-header-color');
        navMain.classList.remove('nav--opened');
    }
});
