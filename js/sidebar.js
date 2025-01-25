const currentTab = document.getElementById("active").innerText;

document.getElementById("active").textContent = currentTab + " *";

const showSidebarBtn = document.getElementById("showSidebar");

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
