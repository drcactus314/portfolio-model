const getWorkSection = document.getElementById("work");
const animationSections = document.querySelectorAll(".works-section__list");

const optinsObserver = {
  threshold: 0.1,
};

const runAnimation = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting === true) {
      animationSections.forEach((list) => {
        list.classList.add("is-animated");
      });
    } else {
      animationSections.forEach((list) => {
        list.classList.remove("is-animated");
      });
    }
  });
};

const observer = new IntersectionObserver(runAnimation, optinsObserver);
observer.observe(getWorkSection);
