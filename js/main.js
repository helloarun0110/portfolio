

document.addEventListener("DOMContentLoaded", () => {
  // Type effect
  const text = "SWE Student at SUST | Backend Developer | AI/ML & CV Enthusiast";
  let index = 0;

  function typeEffect() {
    const typingEl = document.getElementById("typing");
    if (!typingEl) return; // prevent errors if element is missing

    if (index < text.length) {
      typingEl.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 60);
    }
  }

  typeEffect();

  // Read More button
  const readMoreBtn = document.querySelector(".read-more-btn");
  const moreText = document.querySelector(".more-text");

  if (readMoreBtn && moreText) {
    readMoreBtn.addEventListener("click", () => {
      moreText.classList.toggle("show");
      readMoreBtn.textContent =
        moreText.classList.contains("show")
          ? "Read Less"
          : "Read More";
    });
  }

  // Timeline intersection observer
  const items = document.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.15
  });

  items.forEach(item => observer.observe(item));
});
