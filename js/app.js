const leftBtn = document.querySelector(
  "#slider1-section button i.bi-arrow-left"
);
const rightBtn = document.querySelector(
  "#slider1-section button i.bi-arrow-right"
);
const slider1 = document.querySelector("#slider1");
leftBtn.parentElement.addEventListener("click", () => {
  slider1.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
rightBtn.parentElement.addEventListener("click", () => {
  slider1.scrollTo({
    top: 0,
    left: 1000,
    behavior: "smooth",
  });
});
