const closeBtn = document.querySelector(".close-right-menu");
const openBtn = document.querySelector(".header-nav_menu");
const rightMenu = document.querySelector(".right-menu");
const header = document.querySelector(".header-full-width");
const slideDom = document.querySelector(".add-item-carousel");
// header
window.onscroll = () => {
  const top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 0) {
    header.classList.add("on-move");
  } else {
    header.classList.remove("on-move");
  }
};

openBtn.onclick = () => {
  rightMenu.classList.add("active");
};
closeBtn.onclick = () => {
  rightMenu.classList.remove("active");
};
// owl carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});

const carouselData = [
  {
    title: "The Desert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero1.webp",
  },
  {
    title: "Mountains Hike",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero2.webp",
  },
  {
    title: "Sand Storm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero3.webp",
  },
  {
    title: "New York View",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero4.webp",
  },
  {
    title: "The Desert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero1.webp",
  },
  {
    title: "Mountains Hike",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero2.webp",
  },
  {
    title: "Sand Storm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero3.webp",
  },
  {
    title: "New York View",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero4.webp",
  },
  {
    title: "The Desert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero1.webp",
  },
  {
    title: "Mountains Hike",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero2.webp",
  },
  {
    title: "Sand Storm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero3.webp",
  },
  {
    title: "New York View",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.",
    imageSrc: "./assets/image/hero4.webp",
  },
];
const htmlDom = carouselData
  .map((item) => {
    return `
      <div class="hero-item">
        <div class="item__image" style="background-image: url(${item.imageSrc});">
          <h2 class="item__title">${item.title}</h2>
          <div class="item__description">
            ${item.description}
          </div>
        </div>
      </div>
    `;
  })
  .join("");

slideDom.innerHTML = htmlDom;
