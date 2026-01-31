(function () {
  var slides = document.querySelectorAll(".slide");
  var prevBtn = document.getElementById("prev");
  var nextBtn = document.getElementById("next");
  var indicator = document.getElementById("indicator");
  var total = slides.length;
  var currentIndex = 0;

  function showSlide(index) {
    if (index < 0 || index >= total) return;
    currentIndex = index;

    slides.forEach(function (slide, i) {
      slide.classList.toggle("active", i === currentIndex);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === total - 1;
    indicator.textContent = currentIndex + 1 + " / " + total;
  }

  function goNext() {
    if (currentIndex < total - 1) showSlide(currentIndex + 1);
  }

  function goPrev() {
    if (currentIndex > 0) showSlide(currentIndex - 1);
  }

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  });

  showSlide(0);
})();
