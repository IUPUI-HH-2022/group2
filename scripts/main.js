// On document load...
document.addEventListener('DOMContentLoaded', function () {

    // Update the current year in the footer
    document.getElementById('copyright-year').innerHTML = new Date().getFullYear();

    // Set up mobile menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');
    const button = document.getElementById('mobile-menu');


    button.addEventListener('click',()=> {

        // Toggle navigation
        nav.classList.toggle('visible');

        // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 25 }s`;
            }
        });
        
        // TODO: Fix burger
        // Burger animation
        burger.classList.toggle('toggle');

        // TODO: Set text to "Close" or vice versa

    });

}, false);