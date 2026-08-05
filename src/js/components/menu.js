import { showSectionMessage } from "../helpers/toastify";

export const allDocument = document.getElementById("app");
const headerMenu = document.getElementById("header-menu");
const getAllLinks = document.querySelectorAll(
  ".header__menu__link, .main-button"
);

// Function that toggle header-menu
const getToMenu = () => {
  allDocument.addEventListener("click", (e) => {
    const menuToggleBtn = e.target.closest("#main-menu");
    if (!menuToggleBtn) {
      return;
    }
    e.preventDefault();
    headerMenu.classList.toggle("is-hidden");
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
