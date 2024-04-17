document.addEventListener("DOMContentLoaded", function () {
  const sliderItems = document.querySelectorAll(".slider-item");
  let currentIndex = 0;

  function showSlide(index) {
    sliderItems.forEach((item) => item.classList.remove("active"));
    sliderItems[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentIndex);
  }

  document.getElementById("nextButton").addEventListener("click", nextSlide);
  document.getElementById("prevButton").addEventListener("click", prevSlide);
});
