
  // Select the navbar by its ID
  const navbar = document.getElementById('myNavbar');

  // Define the scroll position at which the background color should change
  const scrollThreshold = 50; // Change this value as needed

  // Function to update the navbar's background color
  function updateNavbarBackground() {
    if (window.scrollY >= scrollThreshold) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }

  // Listen for the scroll event and call the updateNavbarBackground function
  window.addEventListener('scroll', updateNavbarBackground);

  // Initial call to set the navbar's background color based on the initial scroll position
  updateNavbarBackground();

