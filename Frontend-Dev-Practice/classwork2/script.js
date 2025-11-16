const img = document.getElementById("imgs");

let width = img.clientWidth;
let height = img.clientHeight;


const incBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById("resetBtn");
const decBtn = document.getElementById("decBtn");


incBtn.addEventListener("click", () => {
  width += 20;
  height += 20;
  img.style.width = width + "px";
  img.style.height = height + "px";
});


resetBtn.addEventListener("click", () => {
  width = 300; 
  height = "auto";
  img.style.width = width + "px";
  img.style.height = height;
});


decBtn.addEventListener("click", () => {
  if (width > 50) {
    width -= 20;
    height -= 20;
    img.style.width = width + "px";
    img.style.height = height + "px";
  }
});
