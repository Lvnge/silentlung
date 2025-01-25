const preLoader = document.querySelector(".preloader");

preLoader.addEventListener("animationend", function (e) {
  if (e.animationName === "load-completed") {
    document.body.removeChild(preLoader);
  }
});
