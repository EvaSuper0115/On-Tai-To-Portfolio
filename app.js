const nameAndTitle = document.querySelector(".name-and-title-section");
const workAndAboutLinks = document.querySelector(
  ".my-work-and-about-links-row"
);
const serviceTitle = document.querySelector("#service");
const serviceGrid = document.querySelector(".service-grid");
const resumeLink = document.querySelector("#resume");
const myWorkTitle = document.querySelector("#my-work-title");
const projectNames = document.querySelectorAll(".projectName");
const appShowcaseVideos = document.querySelectorAll(".appShowcaseVideos");
const appDescriptions = document.querySelectorAll(".appDescription");
const launchCodeLinksDiv = document.querySelectorAll(
  ".launchAndViewCodesLinksRow"
);
window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  //page hero
  nameAndTitle.style.transform = `translateX(${-offsetY * 0.3}px)`;
  workAndAboutLinks.style.transform = `translateX(${offsetY * 0.3}px)`;
  //service
  serviceTitle.style.transform = `translateY(${-offsetY * 0.3}px)`;
  serviceGrid.style.transform = `translateY(${-offsetY * 0.2}px)`;
  resumeLink.style.transform = `translateY(calc(490px - ${offsetY}px))`;
  //see my work
  myWorkTitle.style.transform = `translateY(calc(700px - ${offsetY * 1.3}px))`;
  //first project
  projectNames[0].style.transform = `translateY(calc(730px - ${
    offsetY * 1.2
  }px))`;
  appShowcaseVideos[0].style.transform = `translate(calc(800px - ${offsetY}px),calc((620px - ${offsetY}px)))`;
  appDescriptions[0].style.transform = `translate(calc(800px - ${offsetY}px),calc((620px - ${offsetY}px)))`;
  launchCodeLinksDiv[0].style.transform = `translateY(calc(720px - ${
    offsetY * 1.1
  }px))`;
  //2nd project
  projectNames[1].style.transform = `translateY(calc(840px - ${
    offsetY * 1.2
  }px))`;
  appShowcaseVideos[1].style.transform = `translate(calc(1150px - ${offsetY}px),calc((640px - ${offsetY}px)))`;
  appDescriptions[1].style.transform = `translate(calc(1150px - ${offsetY}px),calc((640px - ${offsetY}px)))`;
  launchCodeLinksDiv[1].style.transform = `translateY(calc(800px - ${
    offsetY * 1.1
  }px))`;
  //3rd project
  projectNames[2].style.transform = `translateY(calc(966px - ${
    offsetY * 1.2
  }px))`;
  appShowcaseVideos[2].style.transform = `translate(calc(1468px - ${offsetY}px),calc((690px - ${offsetY}px)))`;
  appDescriptions[2].style.transform = `translate(calc(1468px - ${offsetY}px),calc((675px - ${offsetY}px)))`;
  launchCodeLinksDiv[2].style.transform = `translateY(calc(875px - ${
    offsetY * 1.1
  }px))`;
});
