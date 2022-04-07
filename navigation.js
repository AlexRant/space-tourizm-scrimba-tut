const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
// const hamburger = document.getElementById('hamburger');
// const menu = document.querySelector('')
const menu = document.querySelector(".sr-only");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  const menuVisible = menu.getAttribute("aria-expanded");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
  // console.log(menuVisible);
});

// hamburger.addEventListener('click', myFunction )
//   // console.log("Yeahhh");
//   // hamburger.style.background
// // })

// function myFunction() {
//   // var nav = document.getElementById("primary-navigation");
//   // hamburger.classList.add("my-style");
//   // console.log('Ohh yeah!!!');
//   nav.style.color = "yellow";
// }
