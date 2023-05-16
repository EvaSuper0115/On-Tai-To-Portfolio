//on homepage
const homepageHero = document.querySelector(".homepage-hero");
const myName = document.querySelector("#my-name");
const myTitle = document.querySelector("#frontend-developer-title");
const workAndAboutLinks = document.querySelector(
  ".my-work-and-about-links-row"
);
const serviceTitle = document.querySelector("#service");
const serviceGrid = document.querySelector(".service-grid");
const resumeLink = document.querySelector("#resume");
const myWorkTitle = document.querySelector("#my-work-title");
const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  //page hero
  homepageHero.style.backgroundPositionX = `${offsetY * 0.5}px`;
  myName.style.transform = `translateX(${-offsetY * 0.3}px)`;
  myTitle.style.transform = `translateX(${offsetY * 0.3}px)`;
  workAndAboutLinks.style.transform = `translateX(${offsetY * 0.3}px)`;
  //service
  serviceTitle.style.transform = `translateY(${-offsetY * 0.3}px)`;
  serviceGrid.style.transform = `translateY(${-offsetY * 0.2}px)`;
  resumeLink.style.transform = `translateY(calc(490px - ${offsetY}px))`;
  //see my work
  myWorkTitle.style.transform = `translateY(calc(700px - ${offsetY * 1.3}px))`;
  //1st project
  projects[0].style.transform = `translateX(calc(-500px - ${
    -offsetY * 0.4
  }px))`;
  //2nd project
  projects[1].style.transform = `translateX(calc(720px + ${-offsetY * 0.4}px))`;
  //3rd project
  projects[2].style.transform = `translateX(calc(-990px - ${
    -offsetY * 0.4
  }px))`;
  //4th project
  projects[3].style.transform = `translateX(calc(1250px + ${
    -offsetY * 0.4
  }px))`;
  ntactArrows.style.transform = `translateY(calc(2200px - ${offsetY}px))`;
});
