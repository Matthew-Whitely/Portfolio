const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-right");
const prevButton = document.querySelector(".carousel-left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
const projectTitle = document.querySelector(".project-title");
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
  } else {
    prevButton.classList.remove("hidden");
    nextButton.classList.remove("hidden");
  }
};

//when I click left,move slides to the left,
prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((dot) => dot === prevSlide);
  if (prevIndex === 0) {
    projectTitle.innerHTML = "Harper";
  } else if (prevIndex === 1) {
    projectTitle.innerHTML = "Project-Bort";
  } else if (prevIndex === 2) {
    projectTitle.innerHTML = "GitHub Jobs";
  } else if (prevIndex === 3) {
    projectTitle.innerHTML = "Summer Movies";
  }
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});
//when I click right move sldies to the right
nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(track, currentSlide, nextSlide);
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((dot) => dot === nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
  //move to the slide
  if (nextIndex === 0) {
    projectTitle.innerHTML = "Harper";
  } else if (nextIndex === 1) {
    projectTitle.innerHTML = "Project-Bort";
  } else if (nextIndex === 2) {
    projectTitle.innerHTML = "GitHub Jobs";
  } else if (nextIndex === 3) {
    projectTitle.innerHTML = "Summer Movies";
  }
});

const projectName = (targetIndex) => {
  console.log(targetIndex);

  if (targetIndex === 0) {
    projectTitle.innerHTML = "Harper";
  } else if (targetIndex === 1) {
    projectTitle.innerHTML = "Project-Bort";
  } else if (targetIndex === 2) {
    projectTitle.innerHTML = "GitHub Jobs";
  } else if (targetIndex === 3) {
    projectTitle.innerHTML = "Summer Movies";
  }
};

dotsNav.addEventListener("click", (e) => {
  //what indicator was click on?
  const targetDot = e.target.closest("button");
  console.log("tessst");

  if (!targetDot) return;
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
  projectName(targetIndex);
});

/* MENU TOGGLE */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".header-nav");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const navLinksA = Array.from(document.querySelectorAll(".nav-link-a"));
console.log(navLinksA);

if (window.innerWidth <= 883) {
  navLeft.classList.remove("wrapper");
}
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navRight.classList.toggle("active");
  navLeft.classList.toggle("active");
  nav.classList.toggle("active");

  navRight.classList.remove(".active");

  if (menuToggle.classList.contains("active")) {
    setTimeout(() => {
      navRight.classList.add("active");
    }, 100);
    for (let i = 0; i < navLinks.length; i++) {
      console.log(navLinks[i]);
      navLinks[i].classList.remove("active");
      setTimeout(() => {
        navLinks[i].classList.add("active");
      }, i * 100);
    }
  }

  navLinksA.forEach((e) => {
    e.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navRight.classList.remove("active");
      navLeft.classList.remove("active");
      nav.classList.remove("active");
    });
  });
});

const backToTop = document.getElementById("returnToTop");
window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    backToTop.style.visibility = "visible";
    backToTop.style.opacity = 1;
  } else {
    backToTop.style.visibility = "hidden";
    backToTop.style.opacity = 0;
  }
});

window.onresize = resize;
function resize() {
  console.log("resize event detected!");
}
