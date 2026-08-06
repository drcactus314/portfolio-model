
export const getReviews = async () => {
  try {
    const response = await fetch("http://localhost:3000/reviews");
    if (response.ok) {
      const allReviews = await response.json();
      return allReviews;
    }
    throw new Error("Bad Request");
  } catch (error) {
    const reviewContainer = document.getElementById("review-list");
    reviewContainer.innerHTML = `<div class="section-title"> There an issue with server connection</div>`
        throw error;
  }
};
getReviews();

const reviewData = {
  user: "Artem",
  feedback: "Loremii",
  autorizied: true,
};

const createReview = async (reviewData) => {
  try {
    const response = await fetch("http://localhost:3000/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });
    if (response.ok) {
      const newReview = await response.json();
      return newReview;
    }
    throw new Error("400 Bad Request");
  } catch (error) {
    throw error;
  }
};
