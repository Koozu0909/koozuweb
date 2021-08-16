/********  SHOWBARS  *********/
const navMenu = document.getElementById('nav-menu'),
    navToggle =  document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/********  review-slider *********/
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});



/************* SCROLL REVEAL ANIMATION *************/
const sr = ScrollReveal({
    distance: '40px',
    duration: 2800,  
    reset: true,
})


sr.reveal(`.home-container, .offer-data ,.top,.service-title,.banner-content-title
            ,.banner-content-subtitle`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.home-container, .bottom,.swiper-container`,{
    origin: 'bottom',
    interval: 100,
})

sr.reveal(`.left`,{
    origin: 'left',
    interval: 100,
})

sr.reveal(`.right`,{
    origin: 'right',
    interval: 100,
})

