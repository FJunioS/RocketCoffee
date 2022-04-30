const burgerOpen = document.querySelector(".burgerOpen");
const burgerClose = document.querySelector(".burgerClose");
const nav = document.querySelector(".nav-mobile");

burgerOpen.addEventListener("click", () => {
  nav.classList.remove("hidden")
  burgerOpen.classList.add("hidden")
  burgerClose.classList.remove("hidden")
})

burgerClose.addEventListener("click", () => {
  nav.classList.add("hidden");
  burgerClose.classList.add("hidden");
  burgerOpen.classList.remove("hidden");
})