// Get the navbar element
const navbar = document.querySelector(".navbar");

// Add a scroll event listener to the window object
window.addEventListener("scroll", () => {
  // Check if the user is on a mobile device
  const isMobile = window.innerWidth < 768; // Change 768 to the appropriate mobile breakpoint

  // If the user is on a mobile device or has scrolled down, change the navbar background color
  if (isMobile || window.pageYOffset > 0) {
    navbar.style.backgroundColor = "#B91C1C"; // Change this to the desired background color
  } else {
    navbar.style.backgroundColor = "transparent"; // Change this to the desired background color
  }
});
