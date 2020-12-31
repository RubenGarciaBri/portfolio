// Import SASS styles
import './styles/main.scss';

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

//Change nav styles on scroll
document.addEventListener('scroll', scrollNav);

function scrollNav() {
  //Media Query for Mobile
  const query = window.matchMedia('(max-width: 56.25em)');

  //Run different functions depending whether on Tab Portrait & Mobile or desktop
  if (query.matches) {
    //Navbar changes immediately after scrolling
    scrollNavTabPort();
  }
  //Navbar changes after scrolling 100px
  else {
    scrollNavDesktop();
  }

  function scrollNavTabPort() {
    if (window.scrollY > 0) {
      navBar.classList.add('navbar--active');
    } else {
      navBar.classList.remove('navbar--active');
    }
  }

  function scrollNavDesktop() {
    if (window.scrollY > 100) {
      navBar.classList.add('navbar--active');
    } else {
      navBar.classList.remove('navbar--active');
    }
  }

}

// Make nav links active on scroll
window.addEventListener('scroll', switchNavLinks);

function switchNavLinks() {
  //Store how far the user has scrolled in a variable
  const fromTop = window.scrollY;

  //Loop through the anchors in the navbar and get each section through the hash property
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
  
    //Change styling the the active class when the viewport reaches each section
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
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


