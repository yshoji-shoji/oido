const random = (max) =>
  Math.floor(Math.random() * (Math.ceil(max) + Math.ceil(0)) + Math.ceil(0));

const init = () => {
  const initialCount = random(1000);
  const likeCountDisplay = window.document.getElementById("like-count-display");
  likeCountDisplay.innerText = initialCount.toString();
  filter();
};

const filter = () => {
  const filterPatterns = [
    "filter: blur(8px);",
    "filter: contrast(400%);",
    "filter: grayscale(80%);",
    "filter: hue-rotate(90deg);",
    "filter: drop-shadow(16px 16px 20px red) invert(75%);",
    "",
  ];

  const footer = window.document.getElementById("footer");

  const filterIndex = random(6);
  footer.style = filterPatterns[filterIndex];
};

const like = () => {
  const likeButton = window.document.getElementById("like-button");
  likeButton.addEventListener("click", () => {
    const likeCountDisplay =
      window.document.getElementById("like-count-display");
    const currentCount = parseInt(likeCountDisplay.innerText);
    likeCountDisplay.innerText = (currentCount + 1).toString();
    filter();
  });
};

init();
like();
