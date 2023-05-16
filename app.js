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
const projectNames = document.querySelectorAll(".projectName");
const appShowcaseVideos = document.querySelectorAll(".appShowcaseVideos");
const appDescriptions = document.querySelectorAll(".appDescription");
const launchCodeLinksDiv = document.querySelectorAll(
  ".launchAndViewCodesLinksRow"
);
const otherProjectsArrow = document.querySelector("#other-project-arrow");
const workflowSection = document.querySelector(".project-workflow-section");
const gitHubSection = document.querySelector(".githubSection");
const aboutContactArrows = document.querySelector(".aboutContactArrows");
const footer = document.querySelectorAll(".footer");

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
  //first project
  projectNames[0].style.transform = `translateY(calc(730px - ${
    offsetY * 1.2
  }px))`;
  appShowcaseVideos[0].style.transform = `translate(calc(840px - ${offsetY}px),calc((620px - ${offsetY}px)))`;
  appDescriptions[0].style.transform = `translate(calc(840px - ${offsetY}px),calc((620px - ${offsetY}px)))`;
  launchCodeLinksDiv[0].style.transform = `translateY(calc(720px - ${
    offsetY * 1.1
  }px))`;
  //2nd project
  projectNames[1].style.transform = `translateY(calc(940px - ${
    offsetY * 1.2
  }px))`;
  appShowcaseVideos[1].style.transform = `translate(calc(1150px - ${offsetY}px),calc((740px - ${offsetY}px)))`;
  appDescriptions[1].style.transform = `translate(calc(1150px - ${offsetY}px),calc((740px - ${offsetY}px)))`;
  launchCodeLinksDiv[1].style.transform = `translateY(calc(900px - ${
    offsetY * 1.1
  }px))`;
  //3rd project
  projectNames[2].style.transform = `translateY(calc(1150px - ${
    offsetY * 1.2
  }px))`;
  appShowcaseVideos[2].style.transform = `translate(calc(1490px - ${offsetY}px),calc((900px - ${offsetY}px)))`;
  appDescriptions[2].style.transform = `translate(calc(1490px - ${offsetY}px),calc((900px - ${offsetY}px)))`;
  launchCodeLinksDiv[2].style.transform = `translateY(calc(1080px - ${
    offsetY * 1.1
  }px))`;
  //4th project
  projectNames[3].style.transform = `translateY(calc(1360px - ${
    offsetY * 1.2
  }px))`;
  appShowcaseVideos[3].style.transform = `translate(calc(1880px - ${offsetY}px),calc((1050px - ${offsetY}px)))`;
  appDescriptions[3].style.transform = `translate(calc(1880px - ${offsetY}px),calc((1050px - ${offsetY}px)))`;
  launchCodeLinksDiv[3].style.transform = `translateY(calc(1290px - ${
    offsetY * 1.1
  }px))`;
  //other project arrow to netlify
  otherProjectsArrow.style.transform = `translateY(calc(1100px - ${offsetY}px))`;
  //workflow section
  //workflowSection.style.transform = `translateY(calc(1500px - ${offsetY}px))`;
  //gitHubSection.style.transform = `translateY(calc(2000px - ${offsetY}px))`;
  //aboutContactArrows.style.transform = `translateY(calc(2200px - ${offsetY}px))`;
});
