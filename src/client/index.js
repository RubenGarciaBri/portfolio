// Import SASS styles
import './styles/main.scss';
import MicroModal from 'micromodal';

//Activate Micromodal
MicroModal.init();

//Define Main Variables
const floatingBtn = document.querySelector('.floating a');
const sections = document.querySelectorAll('section');
const phoneMenuIcon = document.querySelector('.sideNav__icon');
const phoneMenu = document.querySelector('.sideNav');
// const section1 = document.querySelector('.section-one');

//Asign navBar as variable
const navBar = document.querySelector('.navbar');

//Define anchors in nav to variables
const navLinks = document.querySelectorAll('.navbar__list-item a');
const logoLink = document.querySelector('.logo-box a');

//Scroll to each section on click
navLinks.forEach((link) => link.addEventListener('click', goToSection));

function goToSection(e) {
  //Prevent default behavior
  e.preventDefault();
  // Get the target attribute of each anchor
  const targetId = e.currentTarget.getAttribute('href');
  // Sroll to the section which ID equals the target attribute
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: 'smooth',
  });
}

// Open and close mobile menu
phoneMenuIcon.addEventListener('click', togglePhoneMenu);

function togglePhoneMenu() {
  phoneMenu.classList.toggle('sideNav--open');
}

//Scrolls to the top on click
logoLink.addEventListener('click', goToTop);
floatingBtn.addEventListener('click', goToTop);

function goToTop(e) {
  //Prevent default behavior
  e.preventDefault();

  // Scroll Function
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

