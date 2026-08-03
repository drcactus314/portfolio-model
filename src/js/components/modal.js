import { allDocument } from "./menu";

const contactForm = document.getElementById("contact-form");
const backdrop = document.querySelector(".backdrop");

const handleEscape = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
};

const openModal = () => {
  backdrop.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", handleEscape());
};
const closeModal = () => {
  backdrop.classList.add("is-hidden");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", handleEscape());
};

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    openModal();
});

backdrop.addEventListener("click", (e) => {
  if (e.target.closest(".modal__close-button") || e.target === backdrop) {
    closeModal();
  }
});