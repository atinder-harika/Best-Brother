const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, LY Happy Rakhri!";
  gif.src =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdThnbnEya2Zob2I3em5lYThqa2swNmE2MGk3Ymtra2RtOXZrYm9xZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lIBIqz07184USsZBAi/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});