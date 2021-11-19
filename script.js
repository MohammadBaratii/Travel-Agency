const $ = document;
const nav = $.querySelector(".nav");
const chevron = $.querySelector(".chevron");
const menu = $.querySelector(".menu");
const burger = $.querySelector(".burger .fa-bars");

//making nav shrink / showing chevron
window.onscroll = () => {
  if (window.pageYOffset > 10) {
    nav.classList.add("nav--active");
  } else {
    nav.classList.remove("nav--active");
  }
  if (window.pageYOffset > 200) {
    chevron.classList.add("chevron--active");
  } else {
    chevron.classList.remove("chevron--active");
  }
};

//scroll to top
chevron.onclick = () => {
  window.scrollTo(0, 0);
};

//responsive menu
burger.onclick = () => {
  menu.classList.toggle("active");
  burger.classList.toggle("fa-times");
};
