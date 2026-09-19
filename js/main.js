

const hamburger = document.querySelector(".js-hamburger");
const nav = document.querySelector(".js-nav");

hamburger.addEventListener("click", function () {
  const isOpen = hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("fixed");

  hamburger.setAttribute("aria-expanded", isOpen);
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "メニューを閉じる" : "メニューを開く"
  );
});
