const goDownBtn = document.getElementById("goDown");
const pageUp = document.querySelectorAll(".fa-angle-up");
const pageDown = document.querySelectorAll(".fa-angle-down");

goDownBtn.addEventListener("click", goDown);
pageUp.forEach((but) => {
  but.addEventListener("click", goUp);
});
pageDown.forEach((but) => {
  but.addEventListener("click", goDown);
});

function goDown() {
  const currentPageYOffset = window.pageYOffset;
  console.log(currentPageYOffset);
  window.scrollTo({
    top: currentPageYOffset + 1016,
    left: 0,
    behavior: "smooth",
  });
}

function goUp() {
  const currentPageYOffset = window.pageYOffset;
  window.scrollTo({
    top: currentPageYOffset - 1016,
    left: 0,
    behavior: "smooth",
  });
}
