// typing text animation script
var typed = new Typed(".typing", {
  strings: ["الإبْداع", "الابْتكار", "اَلفَن", "اَلمُتعة البصريَّة"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  cursorChar: '',
  fadeOutDelay: 1000,
  smartBackspace: true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 80,
  autoplay: { 
    delay: 3000,
    disableOnlnteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});