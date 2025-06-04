function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    const navbar = document.querySelector('header');
    const navbarHeight = navbar.getBoundingClientRect().height;
    const additionalOffset = window.innerWidth <= 768 ? 30 : 10;
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = sectionTop - navbarHeight - additionalOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    scrollToSection(targetId);
  });
});

const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

function updateCarousel() {
  carouselItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

updateCarousel();