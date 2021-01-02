// Import SASS styles
import './styles/main.scss';
import MicroModal from 'micromodal';

//Activate Micromodal
MicroModal.init();


//Define Main Variables
const floatingBtn = document.querySelector('.floating a');
const sections = document.querySelectorAll('section');
// const section1 = document.querySelector('.section-one');

//Asign navBar as variable
const navBar = document.querySelector('.navbar');

//Define anchors in nav to variables
const navLinks = document.querySelectorAll('.navbar__list-item a');
const logoLink = document.querySelector('.logo-box a');

//Scroll to each section on click
navLinks.forEach(link => link.addEventListener('click', goToSection));

function goToSection(e) {
  //Prevent default behavior
  e.preventDefault();
  // Get the target attribute of each anchor
  const targetId = e.currentTarget.getAttribute('href');
  // Sroll to the section which ID equals the target attribute
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: 'smooth'
  })
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
    behavior: 'smooth'
  });
}

//Slideshow
const slider = document.querySelector('.slider');
const sliderIcon = document.querySelectorAll('.slider-icon') 

let isDown = false;
let startX;
let scrollLeft;

// Slider event listeners
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log("erreerre", scrollLeft)
});

slider.addEventListener('mouseover', () => {
  sliderIcon.forEach((icon) => {
    icon.classList.add('active');
  })
  
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  sliderIcon.forEach((icon) => {
    icon.classList.remove('active');
  })
  
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
 
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;  // stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
  
  console.log('sdsd', scrollLeft)
  console.log(slider.scrollLeft)
});


