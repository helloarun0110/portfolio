
const readMoreBtn = document.querySelector(".read-more-btn");
const moreText = document.querySelector(".more-text");

readMoreBtn.addEventListener("click", () => {
  moreText.classList.toggle("show");

  if (moreText.classList.contains("show")) {
    readMoreBtn.textContent = "Read Less";
  } else {
    readMoreBtn.textContent = "Read More";
  }
});




const text = "SWE Student at SUST | Backend Developer | AI/ML & CV Enthusiast";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

typeEffect();









// document.addEventListener("DOMContentLoaded", () => {

//   // ===== Scroll Reveal =====
//   const items = document.querySelectorAll(".timeline-item");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//       }
//     });
//   }, { threshold: 0.2 });

//   items.forEach(item => observer.observe(item));

// });


document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".timeline-item");

  console.log("Found items:", items.length);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  items.forEach(item => observer.observe(item));

});
