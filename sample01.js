const typedText = document.querySelector(".typing");
const jobTitles = ["Frontend Developer", "UI UX Designer", "Web Designer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = jobTitles[wordIndex];

  if (isDeleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  typedText.textContent = currentWord.substring(0, letterIndex);

  if (!isDeleting && letterIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % jobTitles.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();



  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });

  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    const percent = circle.getAttribute("data-percent");
    const circleElem = circle.querySelector("circle");
    const offset = 251.2 - (251.2 * percent) / 100;
    setTimeout(() => {
      circle.classList.add("active");
      circleElem.style.strokeDashoffset = offset;
    }, 1000);
  });
});
 const slider = document.querySelector('.project-slider');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let scrollAmount = 0;
  const scrollStep = 330;
  nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
      scrollAmount = slider.scrollWidth - slider.clientWidth;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });