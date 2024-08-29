document.addEventListener("DOMContentLoaded", function () {
  // Funciones para un slider
  function setupSlider(sliderId, prevButtonId, nextButtonId) {
    const sliderItems = document.querySelectorAll(`#${sliderId} .slider-item`);
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
      currentIndex =
        (currentIndex - 1 + sliderItems.length) % sliderItems.length;
      showSlide(currentIndex);
    }

    document.getElementById(nextButtonId).addEventListener("click", nextSlide);
    document.getElementById(prevButtonId).addEventListener("click", prevSlide);
  }

  // Configura el primer slider
  setupSlider("slider1", "prevButton1", "nextButton1");

  // Configura el segundo slider
  setupSlider("slider2", "prevButton2", "nextButton2");
});
