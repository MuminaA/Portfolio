function toggleMenu() {
  // target elements
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // add open class to elements
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// light and dark theme

document.getElementById("dark-logo").style.display = "none";
document.getElementById("dark-icons").style.display = "none";
document.querySelector("#email-icon-dark").style.display = "none";
document.querySelector("#linkedin-icon-dark").style.display = "none";

let arrowDarkElements = document.querySelectorAll(".arrow-dark");
arrowDarkElements.forEach(function (element) {
  element.style.display = "none";
});

function toggleLight() {
  // target elements
  document.body.style.backgroundColor = "white";

  document.getElementById("dark-mode-icon").style.display = "block";
  document.getElementById("light-mode-icon").style.display = "none";

  document.getElementById("light-icons").style.display = "flex";
  document.getElementById("dark-icons").style.display = "none";

  document.getElementById("light-logo").style.display = "block";
  document.getElementById("dark-logo").style.display = "none";

  document.querySelector("#email-icon-dark").style.display = "none";
  document.querySelector("#linkedin-icon-dark").style.display = "none";
  document.querySelector("#email-icon-light").style.display = "flex";
  document.querySelector("#linkedin-icon-light").style.display = "flex";

  let arrowDarkElements = document.querySelectorAll(".arrow-dark");
  arrowDarkElements.forEach(function (element) {
    element.style.display = "none";
  });
  let arrowLightElements = document.querySelectorAll(".arrow-light");
  arrowLightElements.forEach(function (element) {
    element.style.display = "block";
  });

  // change h1 elements color
  let h1Element = document.getElementsByTagName("h1");

  for (let i = 0; i < h1Element.length; i++) {
    h1Element[i].style.color = "black";
  }

  // change a elements color
  let uList = document.getElementsByTagName("a");

  for (let i = 0; i < uList.length; i++) {
    uList[i].style.color = "black";
  }
}

function toggleDark() {
  // target elements
  document.body.style.backgroundColor = "black";

  document.getElementById("light-mode-icon").style.display = "block";
  document.getElementById("dark-mode-icon").style.display = "none";

  document.getElementById("light-icons").style.display = "none";
  document.getElementById("dark-icons").style.display = "flex";

  document.getElementById("light-logo").style.display = "none";
  document.getElementById("dark-logo").style.display = "block";

  document.querySelector("#email-icon-light").style.display = "none";
  document.querySelector("#linkedin-icon-light").style.display = "none";
  document.querySelector("#email-icon-dark").style.display = "flex";
  document.querySelector("#linkedin-icon-dark").style.display = "flex";

  let arrowDarkElements = document.querySelectorAll(".arrow-dark");
  arrowDarkElements.forEach(function (element) {
    element.style.display = "block";
  });
  let arrowLightElements = document.querySelectorAll(".arrow-light");
  arrowLightElements.forEach(function (element) {
    element.style.display = "none";
  });

  // change h1 elements color
  let h1Element = document.getElementsByTagName("h1");

  for (let i = 0; i < h1Element.length; i++) {
    h1Element[i].style.color = "white";
  }

  // change a elements color
  let uList = document.getElementsByTagName("a");

  for (let i = 0; i < uList.length; i++) {
    uList[i].style.color = "white";
  }

  // let dContainer = document.getElementsByClassName('details-container')

  // for (let i = 0; i < dContainer.length; i++) {
  //   // dContainer[i].style.backgroundColor = "#4e4e4e";
  //   dContainer[i].classList.add('whiteShadow')
  // }
}
