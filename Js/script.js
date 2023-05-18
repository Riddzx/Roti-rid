// Toglle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle(
    "active"
  ); /*class yang dituju tidak menggunakan TITIK*/
};
//   klik di luar rnavbar untuk menghilankan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove(
      "active"
    ); /*class yang dituju tidak menggunakan TITIK*/
  }
});
