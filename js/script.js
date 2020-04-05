window.onload = function () {
  const brendsItems = document.querySelectorAll(".brends__item");
  const brendsLastItems = document.querySelectorAll(
    ".brends__item:nth-last-child(-n+3)"
  );

  const brendsMoreBtn = document.querySelector(".brends__more-btn");

  brendsMoreBtn.addEventListener("click", function () {
    if (brendsMoreBtn.classList.contains("more-btn--open")) {
      brendsMoreBtn.classList.remove("more-btn--open");
      brendsItems.forEach((item) => {
        item.classList.remove("brends__item--hidden");
      });
    } else {
      let countNodes = brendsItems.length;
      brendsLastItems.forEach((item) => {
        item.classList.add("brends__item--hidden");
      });
      brendsMoreBtn.classList.add("more-btn--open");
    }
  });

  var swiper = new Swiper(".swiper-container", {
    spaceBetween: 0,
    width: 240,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  let brends = document.querySelector(".brends");
  let brendsMobile = document.querySelector(".brends-mobile");
  if (window.innerWidth < 350) {
    brends.classList.add("display-none");
    brendsMobile.classList.remove("display-none");
  } else {
    brends.classList.remove("display-none");
    brendsMobile.classList.add("display-none");
  }
  console.log(window.innerWidth);
};
