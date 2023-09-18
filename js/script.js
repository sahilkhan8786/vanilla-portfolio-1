// HAMBURGER-MENU
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');
menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x');
})



let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    // SCROLL SECTION ACTIVE LINK
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    // NAVBAR STICKY POSITION
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100)

    // remove hamburger menu on scroll or clicks

    if (window.scrollY > 100) {
        navbar.classList.remove('active');
        menu.classList.remove('bx-x');
    }
}





// SWIPER JS
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// dark Light Mode

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}


// SCROLL REVEAL
ScrollReveal({ reset: true, distance: '2px', duration: 2000, delay: 200 });

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-image img , .about-img, .services-container, .portfolio-box, .testimonial-wrapper , .contact form', { origin: 'bottom' });