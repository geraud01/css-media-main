let currentIndex = 0;

function showSlide(index) {
  const container = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slide').clientWidth;
  container.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % document.querySelectorAll('.slide').length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
  showSlide(currentIndex);
}

// Inicializar o carrossel
showSlide(currentIndex);


