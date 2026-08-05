const buttonsRotate = document.querySelectorAll(".ac-trigger");

[...buttonsRotate].forEach((item) => {
  item.addEventListener("click", (e) => {
    const targetButton = e.currentTarget;
    const icon = targetButton.querySelector(".button__icon");
    if (icon) {
      icon.classList.toggle("is-rotated");
    }
  });
});
