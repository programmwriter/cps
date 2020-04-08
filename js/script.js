window.onload = function () {
  const brendsItems = document.querySelector(".brends__items");
  const brends = document.querySelector(".brends");
  const brendsMoreBtn = document.querySelector(".brends__more-btn");
  const brendsMobile = document.querySelector(".brends-mobile");
  const btnLinkBefore = document.querySelector(".brend-slide__btn-link");
  const moreBtnOpen = "more-btn--open";
  const brendsExpanded = "brends--expanded";
  const brendsItemsExpanded = "brends__items--expanded";

  const moreBtn = document.querySelectorAll(".more-btn");

  moreBtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      if (event.target.dataset.block === "slide") {        
        if (event.target.classList.contains(moreBtnOpen)) {
          event.target.classList.remove(moreBtnOpen);          
        } else {
          event.target.classList.add(moreBtnOpen);          
        }
      };


      if (event.target.dataset.block === "brends") {        
        if (event.target.classList.contains(moreBtnOpen)) {
          event.target.classList.remove(moreBtnOpen);
          brends.classList.remove(brendsExpanded);
          brendsItems.classList.remove(brendsItemsExpanded);
        } else {
          event.target.classList.add(moreBtnOpen);
          brends.classList.add(brendsExpanded);
          brendsItems.classList.add(brendsItemsExpanded);
        }
      };
    });
  });

  // function moreBtnClick(event) {
  //   if (event.target.classList.contains(moreBtnOpen)) {
  //     event.target.classList.remove(moreBtnOpen);
  //     brends.classList.remove(brendsExpanded);
  //     brendsItems.classList.remove(brendsItemsExpanded);
  //   } else {
  //     event.target.classList.add(moreBtnOpen);
  //     brends.classList.add(brendsExpanded);
  //     brendsItems.classList.add(brendsItemsExpanded);
  //   }
  // }

  // brendsMoreBtn.addEventListener("click", function (event) {
  //   if (brendsMoreBtn.classList.contains(moreBtnOpen)) {
  //     brendsMoreBtn.classList.remove(moreBtnOpen);
  //     brends.classList.remove(brendsExpanded);
  //     brendsItems.classList.remove(brendsItemsExpanded);
  //   } else {
  //     brendsMoreBtn.classList.add(moreBtnOpen);
  //     brends.classList.add(brendsExpanded);
  //     brendsItems.classList.add(brendsItemsExpanded);
  //   }
  // });

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
};
