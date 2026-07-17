import { showSectionMessage } from "../helpers/toastify";

const controlButton = document.getElementById("app");
const headerMenu = document.getElementById("header-menu");
const getAllLinks = document.querySelectorAll(".header__menu__link");

// Function that toggle header-menu
const getToMenu = () => {
  controlButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id === "main-menu") {
      headerMenu.classList.toggle("is-hidden");
    }
  });
};
getToMenu();

//Function that goes to target section in header-menu

[...getAllLinks].map((link) => {
  const targetId = link.getAttribute("href").replace("#", "");

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    } else {
      showSectionMessage();
    }
  });
});
