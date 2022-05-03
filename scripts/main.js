// On document load...
document.addEventListener('DOMContentLoaded', function () {

    // Update the current year in the footer
    document.getElementById('copyright-year').innerHTML = new Date().getFullYear();

    // Set up mobile menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');
    const button = document.getElementById('mobile-menu');
    const buttonText = document.querySelector('#mobile-menu > span');
    const body = document.querySelector('body');

    // On button click...
    button.addEventListener('click',()=> {

        // Toggle navigation
        nav.classList.toggle('visible');

        // Toggle page scroll
        body.classList.toggle('overflow-hidden');

        // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 25 }s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');

        // If menu is open, set text to close. If closed, set text to Menu
        if (burger.classList.contains('toggle')) {
            buttonText.innerHTML = 'Close';
        } else {
            buttonText.innerHTML = 'Menu';
        }

    });

}, false);