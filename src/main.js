const navLink = document.querySelector(".navLink");
const hamburgerButton = document.querySelector(".hamburgerButton");
const triangeNav = document.querySelector(".triangleNav");

hamburgerButton.addEventListener("click", hamburgerButtonClicked);

function hamburgerButtonClicked() {
  if (!hamburgerButton.classList.contains("hamburgerButton-active")) {
    hamburgerButton.classList.add("hamburgerButton-active");
    navLink.classList.add("navLink-active");
    triangeNav.classList.add("triangleNav-active");
  } else {
    hamburgerButton.classList.remove("hamburgerButton-active");
    navLink.classList.remove("navLink-active");
    triangeNav.classList.remove("triangleNav-active");
  }
}
