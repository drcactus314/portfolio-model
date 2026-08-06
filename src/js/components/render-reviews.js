import { getReviews } from "../api/api";

export const reviewContainer = document.getElementById("review-list");

const getReviewsArray = async () => {
  const response = await getReviews();
  const markup = response
    .map((item) => {
      return ` <li class="swiper-slide"> 
                  <article class="reviews-section__item">
                  <div class="cards__icon-container reviews-section__card__icon">
                   <img class="cards__icon" src="${item.image}" loading="lazy" alt="person's review" width="48" height="48">
                  </div>
                  <h3 class="cards__title cards__title--small-margin">${item.user}</h3>
                  <p class="cards__description">${item.feedback}</p>
                </article>
                </li>`;
    })
    .join("");
    reviewContainer.innerHTML = markup;
};
getReviewsArray();
