const sliderItems = document.querySelectorAll('.content__slider-item');
let currentIndex = 0;

setInterval(() => {
  sliderItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % sliderItems.length;
  sliderItems[currentIndex].classList.add('active');
}, 3000);