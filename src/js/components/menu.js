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
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    const targetId = href.replace("#", "");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    } else {
      showSectionMessage();
    }
  });
});
