// Your code goes here
const advPic = 
document.querySelector(".img-content");

advPic.addEventListener("mouseenter", () => {
    advPic.style.transform = "scale(1.75)";
    advPic.style.transition = "all 1s"
});
advPic.addEventListener("mouseleave", () => {
    advPic.style.transform = "scale(1.0)";
    advPic.style.transition = "all 0.35"
});

const rivPic =
document.querySelector(".img-fluid-rounded");

rivPic.addEventListener("dblclick", () => {
    rivPic.style.transform = "rotate(360deg)";
    rivPic.style.transition = "all 2s"
});

const titleChange =
document.querySelector(".logo-heading");

titleChange.addEventListener("click", () => {
    titleChange.style.color = "pink";
});

const copyTake =
document.querySelector("p");

copyTake.addEventListener("copy", () => {
    copyTake.style.transform = "scale(0.0)"
    copyTake.style.transition = "all 3.5s"
});

const boatImg =
document.querySelector(".boat-picture");

boatImg.addEventListener("drag", () => {
    boatImg.style.opacity = "0.1";
    boatImg.style.transition = "all 1.5s";
});

const makeRed =
document.querySelector(".text-content");

makeRed.addEventListener("mouseover", () => {
    makeRed.style.color = "red";
});

let elementsArray = document.querySelectorAll(".btn");

elementsArray.forEach(function(buttonEdit1) {
    buttonEdit1.addEventListener("click", () => {
        buttonEdit1.style.transform = "rotate(90deg)";
        buttonEdit1.style.transition = "all 2s";
    });
});

window.addEventListener('load', (event) => {
    console.log("Let's get it!");
  });

const changeItUp =
document.querySelector(".content-section");

window.addEventListener('scroll', () => {
    changeItUp.style.backgroundColor="pink"
  })