const skillSetLogos = document.querySelectorAll(".skills");

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
});

//making profile move with mouse movement
const container = document.querySelector(".about-me-page-intro-row");
const profilePicture = document.getElementById("profile-picture");
const circle = document.querySelector(".circle");
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  profilePicture.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});
