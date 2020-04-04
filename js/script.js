window.onload = function() {
  const brendsItems = document.querySelectorAll(".brends__item");
  const brendsLastItems = document.querySelectorAll(
    ".brends__item:nth-last-child(-n+3)"
  );

  const brendsMoreBtn = document.querySelector(".brends__more-btn");

  brendsMoreBtn.addEventListener("click", function() {
    if (brendsMoreBtn.classList.contains("more-btn--open")) {
      brendsMoreBtn.classList.remove("more-btn--open");
      brendsItems.forEach(item => {
        item.classList.remove("brends__item--hidden");
      });
    } else {
      let countNodes = brendsItems.length;
      brendsLastItems.forEach(item => {
        item.classList.add("brends__item--hidden");
      });
      brendsMoreBtn.classList.add("more-btn--open");
    }
  });
  console.log(brendsLastItems);
};
