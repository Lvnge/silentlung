// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1-3");
const paper2 = document.querySelector("#p2-3");
const paper3 = document.querySelector("#p3-3");
const paper4 = document.querySelector("#p4-3");
const paper5 = document.querySelector("#p5-3");
const paper6 = document.querySelector("#p6-3");
const paper7 = document.querySelector("#p7-3");
const paper8 = document.querySelector("#p8-3");
const paper9 = document.querySelector("#p9-3");
const paper10 = document.querySelector("#p10-3");
const paper11 = document.querySelector("#p11-3");
const paper12 = document.querySelector("#p12-3");
const paper13 = document.querySelector("#p13-3");
const paper14 = document.querySelector("#p14-3");
const paper15 = document.querySelector("#p15-3");
const paper16 = document.querySelector("#p16-3");
const paper17 = document.querySelector("#p17-3");
const paper18 = document.querySelector("#p18-3");
const paper19 = document.querySelector("#p19-3");
const paper20 = document.querySelector("#p20-3");

const lastPage = document.querySelector("#b20");

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
const numOfPapers = 20;
const maxLocation = numOfPapers + 1;

const papers = [
  paper1,
  paper2,
  paper3,
  paper4,
  paper5,
  paper6,
  paper7,
  paper8,
  paper9,
  paper10,
  paper11,
  paper12,
  paper13,
  paper14,
  paper15,
  paper16,
  paper17,
  paper18,
  paper19,
  paper20,
];

function openBook() {
  book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
  book.style.transform = isAtBeginning ? "translateX(0%)" : "translateX(100%)";
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    if (currentLocation === 1) {
      openBook();
    }

    const index = currentLocation - 1;
    const paper = papers[index];
    if (!paper) return;

    paper.classList.add("flipped");

    // ✅ Correct stacking order
    paper.style.zIndex = index + 1;

    if (currentLocation === numOfPapers) {
      lastPage.classList.add("backpage");
      closeBook(false);
    }

    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    const index = currentLocation - 2;
    const paper = papers[index];
    if (!paper) return;

    // ✅ If we are starting at the back cover, reopen the book
    if (currentLocation === maxLocation) {
      openBook();
      lastPage.classList.remove("backpage");
    }

    paper.classList.remove("flipped");

    // Correct z-index when flipping back
    paper.style.zIndex = numOfPapers - index;

    if (currentLocation === 2) {
      closeBook(true);
    }

    currentLocation--;
  }
}
