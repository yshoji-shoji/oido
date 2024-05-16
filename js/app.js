const like = () => {
  const likeButton = window.document.getElementById("like-button");
  likeButton.addEventListener("click", () => {
    const likeCountDisplay =
      window.document.getElementById("like-count-display");
    const currentCount = parseInt(likeCountDisplay.innerText);
    likeCountDisplay.innerText = (currentCount + 1).toString();
  });
};

like();
