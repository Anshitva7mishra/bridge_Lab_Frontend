const images = [
  "https://via.placeholder.com/100?text=1",
  "https://via.placeholder.com/100?text=2",
  "https://via.placeholder.com/100?text=3",
  "https://via.placeholder.com/100?text=4",
  "https://via.placeholder.com/100?text=5",
  "https://via.placeholder.com/100?text=6",
];

const gallery = document.createElement("div");
gallery.style.display = "grid";
gallery.style.gridTemplateColumns = "repeat(3, 100px)";
document.body.appendChild(gallery);

images.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.style.width = "100px";
  img.style.height = "100px";
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = src;
  });
  gallery.appendChild(img);
});

const modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0,0,0,0.8)";
modal.style.display = "none";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
document.body.appendChild(modal);

const modalImg = document.createElement("img");
modalImg.style.maxWidth = "80%";
modalImg.style.maxHeight = "80%";
modal.appendChild(modalImg);

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

modalImg.addEventListener("click", (event) => {
  event.stopPropagation();
});
