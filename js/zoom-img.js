document.querySelectorAll(".popup-img-container img").forEach((Image) => {
  Image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = Image.getAttribute("src");
  };

  document.querySelector(".close").onclick = () => {
    document.querySelector(".popup-image").style.display = "none";
  };

  document.querySelector(".popup-image img").onclick = () => {
    document.querySelector(".popup-image").style.display = "none";
  };
});
