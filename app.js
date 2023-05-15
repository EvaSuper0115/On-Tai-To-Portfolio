const nameAndTitle = document.querySelector(".name-and-title-section");
const workAndAboutLinks = document.querySelector(
  ".my-work-and-about-links-row"
);
const serviceTitle = document.querySelector("#service");
const serviceGrid = document.querySelector(".service-grid");
const resumeLink = document.querySelector("#resume");
const myWorkTitle = document.querySelector("#my-work-title");

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  nameAndTitle.style.transform = `translateX(${-offsetY * 0.3}px)`;
  workAndAboutLinks.style.transform = `translateX(${offsetY * 0.3}px)`;
  serviceTitle.style.transform = `translateY(${-offsetY * 0.3}px)`;
  serviceGrid.style.transform = `translateY(${-offsetY * 0.2}px)`;
  resumeLink.style.transform = `translateY(calc(490px - ${offsetY}px))`;
});
