const counters = document.querySelectorAll(".counter");
const box = document.querySelector(".section-1__info");
let height = window.innerHeight * 2.4;
const boxTop = box.getBoundingClientRect().top;

// SWIPER

let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// INCREMENTING COUNTER

// function increment() {
//   counters.forEach((item) => {
//     item.innerText = "0";

//     const incrementNumber = () => {
//       const target = +item.getAttribute("data-target");
//       const c = +item.innerText;
//       const incrementN = target / 50;
//       if (c < target) {
//         item.innerText = `${c + incrementN}`;

//         setTimeout(incrementNumber, 10);
//       }
//     };

//     incrementNumber();
//   });

//   return;
// }

// window.addEventListener("scroll", () => {
//   if (height > boxTop) {
//     increment();
//   }
// });
