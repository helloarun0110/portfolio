
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


