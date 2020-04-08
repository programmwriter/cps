window.onload = function () {
  const brendsItems = document.querySelector(".brends__items");
  const brends = document.querySelector(".brends");
  const brendsMoreBtn = document.querySelector(".brends__more-btn");
  const brendsMobile = document.querySelector(".brends-mobile");
  const btnLinkBefore = document.querySelector(".brend-slide__btn-link");

  brendsMoreBtn.addEventListener("click", function () {
    if (brendsMoreBtn.classList.contains("more-btn--open")) {
      brendsMoreBtn.classList.remove("more-btn--open");
      brends.classList.remove("brends--expanded");
      brendsItems.classList.remove("brends__items--expanded");
    } else {
      brendsMoreBtn.classList.add("more-btn--open");
      brends.classList.add("brends--expanded");
      brendsItems.classList.add("brends__items--expanded");
    }
  });


  var swiper = new Swiper(".swiper-container", {
    spaceBetween: 0,
    width: 256,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  
  if (window.innerWidth < 350) {
    brends.classList.add("display-none");
    brendsMobile.classList.remove("display-none");
  } else {
    brends.classList.remove("display-none");
    brendsMobile.classList.add("display-none");
  }
  console.log(btnLinkBefore);
};
