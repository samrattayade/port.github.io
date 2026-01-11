const mobileBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
