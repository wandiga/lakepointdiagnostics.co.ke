const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Hamburger Button Listener
btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "/src/assets/Common/img_logo-symbol-white.png");
  } else {
    logo.setAttribute("src", "/src/assets/Common/img_logo-vertical-colour.png");
  }
}
