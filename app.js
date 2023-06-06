//on homepage
const homepageHero = document.querySelector(".homepage-hero");
const myName = document.querySelector("#my-name");
const myTitle = document.querySelector("#frontend-developer-title");
const workAndAboutLinks = document.querySelector(
  ".my-work-and-about-links-row"
);
const serviceTitle = document.querySelector("#service");
const servicePics = document.querySelectorAll(".service-pics");
const resumeLink = document.querySelector("#resume");
const myWorkTitle = document.querySelector("#my-work-title");
const projects = document.querySelectorAll(".project");
const workflowPics = document.querySelectorAll(".workflow-pic");
window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  //page hero
  //homepageHero.style.backgroundPositionX = `${offsetY * 0.5}px`;
  myName.style.transform = `translateX(${-offsetY * 0.3}px)`;
  myTitle.style.transform = `translateX(${offsetY * 0.3}px)`;
  workAndAboutLinks.style.transform = `translateX(${offsetY * 0.3}px)`;
  //service
  serviceTitle.style.transform = `translateY(calc(200px - ${offsetY * 0.7}px))`;
  //serviceGrid bubble effct
  servicePics[0].style.transform = `translateY(calc(205px - ${
    offsetY * 0.6
  }px))`;
  servicePics[1].style.transform = `translateY(calc(205px - ${
    offsetY * 0.6
  }px))`;
  servicePics[1].style.transitionDelay = "0.03s";
  servicePics[2].style.transform = `translateY(calc(205px - ${
    offsetY * 0.6
  }px))`;
  servicePics[2].style.transitionDelay = "0.06s";
  servicePics[3].style.transform = `translateY(calc(205px - ${
    offsetY * 0.6
  }px))`;
  servicePics[3].style.transitionDelay = "0.09s";
  resumeLink.style.transform = `translateY(calc(520px - ${offsetY * 0.8}px))`;
  //see my work
  myWorkTitle.style.transform = `translateY(calc(890px - ${offsetY * 1.3}px))`;
  //1st project
  projects[0].style.transform = `translateX(calc(-500px - ${
    -offsetY * 0.4
  }px))`;
  //2nd project
  projects[1].style.transform = `translateX(calc(730px + ${-offsetY * 0.4}px))`;
  //3rd project
  projects[2].style.transform = `translateX(calc(-990px - ${
    -offsetY * 0.4
  }px))`;
  //4th project
  projects[3].style.transform = `translateX(calc(1250px + ${
    -offsetY * 0.4
  }px))`;
  //workflow chart bubbles

  workflowPics[0].style.transform = `translateX(calc(1600px + ${
    -offsetY * 0.4
  }px))`;
  //2nd bubble animation delay
  workflowPics[1].style.transform = `translateX(calc(1600px + ${
    -offsetY * 0.4
  }px))`;
  workflowPics[1].style.transitionDelay = "0.02s";
  //3rd bubble animation delay
  workflowPics[2].style.transform = `translateX(calc(1600px + ${
    -offsetY * 0.4
  }px))`;
  workflowPics[2].style.transitionDelay = "0.05s";
  //4th bubble animation delay
  workflowPics[3].style.transform = `translateX(calc(1600px + ${
    -offsetY * 0.4
  }px))`;
  workflowPics[3].style.transitionDelay = "0.07s";
  //5th bubble
  workflowPics[4].style.transform = `translateX(calc(-1630px - ${
    -offsetY * 0.4
  }px))`;
  //6th bubble animation delay = 2nd bubble
  workflowPics[5].style.transform = `translateX(calc(-1630px - ${
    -offsetY * 0.4
  }px))`;
  workflowPics[5].style.transitionDelay = "0.02s";
  //7th bubble animation delay = 3rd bubble
  workflowPics[6].style.transform = `translateX(calc(-1630px - ${
    -offsetY * 0.4
  }px))`;
  workflowPics[6].style.transitionDelay = "0.05s";
  //8th bubble animation delay = 4th bubble
  workflowPics[7].style.transform = `translateX(calc(-1630px - ${
    -offsetY * 0.4
  }px))`;
  workflowPics[7].style.transitionDelay = "0.07s";
});
