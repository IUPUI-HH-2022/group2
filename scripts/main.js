// Mobile menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navList');
    const navLinks = document.querySelectorAll('.navList li');


    burger.addEventListener('click',()=> {
        // Toggle navigation
        nav.classList.toggle('nav-active');

    // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        });
        // Burger animation
        burger.classList.toggle('toggle');
    });    
}

navSlide();