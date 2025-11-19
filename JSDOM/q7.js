const box = document.createElement("div");
box.style.width = "400px";
box.style.height = "400px";
box.style.border = "1px solid black";
box.style.position = "relative";
document.body.appendChild(box);

const coordsDisplay = document.createElement("div");
document.body.appendChild(coordsDisplay);

box.addEventListener("mousemove", (event) => {
  coordsDisplay.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});

box.addEventListener("dblclick", (event) => {
  const dot = document.createElement("div");
  dot.style.width = "10px";
  dot.style.height = "10px";
  dot.style.backgroundColor = "red";
  dot.style.borderRadius = "50%";
  dot.style.position = "absolute";
  dot.style.left = `${event.offsetX - 5}px`;
  dot.style.top = `${event.offsetY - 5}px`;
  box.appendChild(dot);
});
