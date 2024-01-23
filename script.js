const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


function page3Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");

  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });

    e.addEventListener("click", function () {
      toggleImageDisplay();
    });
  });

  var elems1 = document.querySelectorAll(".elem1");
  elems1.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var video = e.getAttribute("data-video");
      fixed.innerHTML = `<video autoplay muted loop src="${video}"></video>`;
    });

    e.addEventListener("click", function () {
      toggleImageDisplay();
    });
  });

  function toggleImageDisplay() {
    fixed.style.display = fixed.style.display === "none" ? "block" : "none";
  }
}

page3Animation();

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}
swiperAnimation();
function menu() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav h1");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";

      navimg.style.opacity = 1;
      // navimg.style.transition = "all ease 0.4s";
      flag = 0;
    }
  });
}

menu();

var loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 4000);
