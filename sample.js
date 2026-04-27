document.getElementById("year").textContent = new Date().getFullYear();
//ANIMATION
// {
//   //SECTION TWO ANIMATION
//   {
//     //HEADING
//     {
//       const elements = document.querySelectorAll(
//         ".section-two-heading-animation",
//       );

//       let lastScrollY = window.scrollY;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             const currentScrollY = window.scrollY;

//             if (entry.isIntersecting) {
//               // Only animate when scrolling DOWN
//               if (currentScrollY > lastScrollY) {
//                 entry.target.classList.add("show");
//               }
//             } else {
//               // Reset only when scrolling UP (so it can animate again later)
//               if (currentScrollY < lastScrollY) {
//                 entry.target.classList.remove("show");
//               }
//             }

//             lastScrollY = currentScrollY;
//           });
//         },
//         {
//           threshold: 0.3,
//         },
//       );

//       elements.forEach((el) => observer.observe(el));
//     }

//     {
//       //SECOND SECTION CASE STUDY
//       const elements = document.querySelectorAll(
//         ".section-two-second-div-animation",
//       );

//       let lastScrollY = window.scrollY;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             const currentScrollY = window.scrollY;

//             if (entry.isIntersecting) {
//               // animate only when scrolling DOWN
//               if (currentScrollY > lastScrollY) {
//                 entry.target.classList.add("show");
//               }
//             } else {
//               // reset when scrolling UP
//               if (currentScrollY < lastScrollY) {
//                 entry.target.classList.remove("show");
//               }
//             }

//             lastScrollY = currentScrollY;
//           });
//         },
//         {
//           threshold: 0.3,
//         },
//       );

//       elements.forEach((el) => observer.observe(el));
//     }
//   }

//   //SECTION THREE ANIMATION
//   {
//     //1ST
//     {
//       const elements = document.querySelectorAll(".section-three-animation-one");

//       let lastScrollY = window.scrollY;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             const currentScrollY = window.scrollY;

//             if (entry.isIntersecting) {
//               // Animate ONLY when scrolling DOWN
//               if (currentScrollY > lastScrollY) {
//                 entry.target.classList.add("show");
//               }
//             } else {
//               // Reset silently when scrolling UP
//               if (currentScrollY < lastScrollY) {
//                 entry.target.classList.remove("show");
//               }
//             }

//             lastScrollY = currentScrollY;
//           });
//         },
//         {
//           threshold: 0.3,
//         },
//       );

//       elements.forEach((el) => observer.observe(el));
//     }
//     {
//       //second
//       const elements = document.querySelectorAll(".section-three-animation-one");

//       let lastScrollY = window.scrollY;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             const currentScrollY = window.scrollY;

//             if (entry.isIntersecting) {
//               // Animate ONLY when scrolling DOWN
//               if (currentScrollY > lastScrollY) {
//                 entry.target.classList.add("show");
//               }
//             } else {
//               // Reset silently when scrolling UP
//               if (currentScrollY < lastScrollY) {
//                 entry.target.classList.remove("show");
//               }
//             }

//             lastScrollY = currentScrollY;
//           });
//         },
//         {
//           threshold: 0.3,
//         },
//       );

//       elements.forEach((el) => observer.observe(el));
//     }
//   }

//   //SECTION FOUR ANIMATION
//   {
//     {
//       //TEXT
//       const elements = document.querySelectorAll(".section-four-animation-text");

//       let lastScrollY = window.scrollY;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             const currentScrollY = window.scrollY;

//             if (entry.isIntersecting) {
//               // animate only when scrolling DOWN
//               if (currentScrollY > lastScrollY) {
//                 entry.target.classList.add("show");
//               }
//             } else {
//               // reset silently when scrolling UP
//               if (currentScrollY < lastScrollY) {
//                 entry.target.classList.remove("show");
//               }
//             }

//             lastScrollY = currentScrollY;
//           });
//         },
//         {
//           threshold: 0.3,
//         },
//       );

//       elements.forEach((el) => observer.observe(el));
//     }
//     {
//       //IMAGE
//       const elements = document.querySelectorAll(".section-four-animation-image");

//       let lastScrollY = window.scrollY;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             const currentScrollY = window.scrollY;

//             if (entry.isIntersecting) {
//               // animate only when scrolling DOWN
//               if (currentScrollY > lastScrollY) {
//                 entry.target.classList.add("show");
//               }
//             } else {
//               // reset when scrolling UP
//               if (currentScrollY < lastScrollY) {
//                 entry.target.classList.remove("show");
//               }
//             }

//             lastScrollY = currentScrollY;
//           });
//         },
//         {
//           threshold: 0.3,
//         },
//       );

//       elements.forEach((el) => observer.observe(el));
//     }
//   }

//   //SECTION FIVE
//   {
//     {
//       const elements = document.querySelectorAll(
//         ".section-five-text-animation, .section-five-images-animation",
//       );

//       let lastScrollY = window.scrollY;

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             const currentScrollY = window.scrollY;

//             if (entry.isIntersecting) {
//               // animate only when scrolling DOWN
//               if (currentScrollY > lastScrollY) {
//                 entry.target.classList.add("show");
//               }
//             } else {
//               // reset only when scrolling UP
//               if (currentScrollY < lastScrollY) {
//                 entry.target.classList.remove("show");
//               }
//             }

//             lastScrollY = currentScrollY;
//           });
//         },
//         {
//           threshold: 0.3,
//         },
//       );

//       elements.forEach((el) => observer.observe(el));
//     }
//   }
// }
//NAV BAr TOGGLE

{
  const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeMenu");

  // Open menu
  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
  });

  // Close menu
  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });

}

//sidebar active code
{
  const links = document.querySelectorAll(".side-menu-anchor");

  links.forEach(link => {
    link.addEventListener("click", () => {

      links.forEach(l => l.classList.remove("active"));


      link.classList.add("active");
    });
  });
}