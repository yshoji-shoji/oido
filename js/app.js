const init = () => {
  const initialCount = Math.floor(
    Math.random() * (Math.ceil(1000) + Math.ceil(0)) + Math.ceil(0)
  );
  const likeCountDisplay = window.document.getElementById("like-count-display");
  likeCountDisplay.innerText = initialCount.toString();
};

const like = () => {
  const likeButton = window.document.getElementById("like-button");
  likeButton.addEventListener("click", () => {
    const likeCountDisplay =
      window.document.getElementById("like-count-display");
    const currentCount = parseInt(likeCountDisplay.innerText);
    likeCountDisplay.innerText = (currentCount + 1).toString();
  });
};

init();
like();
