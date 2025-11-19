const textArea = document.createElement("textarea");
textArea.maxLength = 100;
document.body.appendChild(textArea);

const counter = document.createElement("div");
counter.textContent = "100 characters remaining";
document.body.appendChild(counter);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
document.body.appendChild(resetButton);

textArea.addEventListener("input", () => {
  const remaining = 100 - textArea.value.length;
  counter.textContent = `${remaining} characters remaining`;
  if (remaining <= 20 && remaining > 0) {
    counter.style.color = "yellow";
  } else if (remaining <= 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
});

textArea.addEventListener("keydown", (event) => {
  if (
    textArea.value.length >= 100 &&
    event.key !== "Backspace" &&
    event.key !== "Delete"
  ) {
    event.preventDefault();
  }
});

resetButton.addEventListener("click", () => {
  textArea.value = "";
  counter.textContent = "100 characters remaining";
  counter.style.color = "black";
});
