const skillSetLogos = document.querySelectorAll(".skills");

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
});

const container = document.querySelector(".container");
const profilePicture = document.getElementById("profile-picture");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
  console.log(xAxis);
});
