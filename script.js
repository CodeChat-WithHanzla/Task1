function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const icon = document.getElementById("hamburger-icon");

  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    icon.innerHTML = "&times;";
  } else {
    icon.innerHTML = "&#9776;";
  }
}