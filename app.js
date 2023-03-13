const menu = document.querySelector('#mobile-menu')
const navbar_links = document.querySelector('#navbar_links');
const menuLinks = document.querySelector('.navbar_menu')


// Previous working open-toggle js

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

/* Close Toggle Menu when link is clicked */

menuLinks.addEventListener('click', function() {
    menu.classList.remove('is-active')
    menuLinks.classList.remove('active')
})