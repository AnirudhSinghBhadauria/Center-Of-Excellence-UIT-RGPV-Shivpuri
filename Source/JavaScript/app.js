const wrapper = document.getElementById("bubble-wrapper");
const Footer = document.querySelector(`#footer`)
const primaryNavbar = document.querySelector(`.primary-navigation`)
const navToggler = document.querySelector(`.mobile-nav-toggle`)
let index = 0;



// document.querySelector(`#info-section`).addEventListener(`scroll`,()=>{
//   document.querySelector(`#brandLogo`).style.color = `green`;
//   console.log(`scroll on info`);
// })


navToggler.addEventListener(`click`,()=>{
    const visiblity = primaryNavbar.getAttribute(`data-visible`) 
    if(visiblity === `false`){
      primaryNavbar.setAttribute(`data-visible` , true);
      primaryNavbar.setAttribute(`aria-expanded` , true);
    }else if(visiblity === `true`){
      primaryNavbar.setAttribute(`data-visible` , false);
      primaryNavbar.setAttribute(`aria-expanded` , false);
    }
})


// window.addEventListener(`scroll`,()=>{
//   console.log(`scrolled`);
// })


var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.3,
  spaceBetween: 15,
  centeredSlides: true,
  freeMode: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    500: {
      slidesPerView: 1
    },
    900: {
      slidesPerView: 1
    }
  }
});






















// FOOTER!        FOOTER!     FOOTER!     FOOTER!     FOOTER!
const Red = {
  One: "rgb(239, 83, 80)",
  Two: "rgb(244, 67, 54)",
  Three: "rgb(229, 57, 53)",
  Four: "rgb(211, 47, 47)",
  Five: "rgb(198, 40, 40)",
};

const Green = {
  One: "rgb(102, 187, 106)",
  Two: "rgb(76, 175, 80)",
  Three: "rgb(67, 160, 71)",
  Four: "rgb(56, 142, 60)",
  Five: "rgb(46, 125, 50)",
};

const Blue = {
  One: "rgb(66, 165, 245)",
  Two: "rgb(33, 150, 243)",
  Three: "rgb(30, 136, 229)",
  Four: "rgb(25, 118, 210)",
  Five: "rgb(21, 101, 192)",
};

const Color = Red;

const colors = [
  Color.One,
  Color.Two,
  Color.Three,
  Color.Four,
  Color.Five,
  Color.Four,
  Color.Three,
  Color.Two,
];

const animateBubble = (x) => {
  const bubble = document.createElement("div");

  Footer.addEventListener(`mouseenter`,()=>{
    wrapper.style.height = `30%`
    bubble.classList.add(`slide-in-bottom`);
  })
  Footer.addEventListener(`mouseleave`,()=>{
    bubble.classList.remove(`slide-in-bottom`);
    bubble.classList.add(`slide-out-bottom`);
    setTimeout(() => wrapper.style.height = `0%`, 0);})

  bubble.className = "bubble";
  bubble.style.left = `${x}px`;

  bubble.style.backgroundColor = colors[index++ % (colors.length - 1)];

  wrapper.appendChild(bubble);

  setTimeout(() => wrapper.removeChild(bubble), 2000);
};

window.onmousemove = (e) => animateBubble(e.clientX);
