const themes = ["light", "dark", "blue"];

themes.forEach((theme) => {
  const button = document.createElement("button");
  button.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
  button.addEventListener("click", () => {
    document.body.className = theme;
    document.body.setAttribute("data-theme", theme);
  });
  document.body.appendChild(button);
});

document.body.setAttribute("data-theme", "light");
