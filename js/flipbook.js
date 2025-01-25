$(document).ready(function () {
  // Initialize Flickity on the carousel after the page is loaded
  var $carousel = $(".carousel");
  var flickityInstance;

  // Make sure the images are loaded before initializing Flickity
  $carousel.imagesLoaded().then(function () {
    // Initialize Flickity after the images are loaded
    flickityInstance = $carousel.flickity({
      cellAlign: "center",
      contain: true,
      wrapAround: false, // Disable wrap around initially
      autoPlay: false, // Disable autoplay
      pageDots: false, // Hide page dots
      prevNextButtons: true, // Enable next/prev buttons
      dragThreshold: 5, // Smoother drag behavior
      selectedAttraction: 0.1, // Reduce Flickity movement speed to make it smoother
      friction: 0.95, // Set smoothness of drag
    });

    // Handle change event with proper index
    $carousel.on("change.flickity", function (event, index) {
      console.log("Slide changed to index: " + index);
    });
  });

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Attach resize event with debounce
  $(window).on(
    "resize",
    debounce(function () {
      if (flickityInstance) {
        flickityInstance.resize(); // Call resize method on the Flickity instance
      }
    }, 200)
  );
});
