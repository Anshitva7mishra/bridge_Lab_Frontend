const productInput = document.createElement("input");
productInput.type = "text";
productInput.placeholder = "Enter product name";
document.body.appendChild(productInput);

const addButton = document.createElement("button");
addButton.textContent = "Add Product";
document.body.appendChild(addButton);

const productList = document.createElement("ul");
document.body.appendChild(productList);

addButton.addEventListener("click", () => {
  const productName = productInput.value.trim();
  if (productName) {
    const listItem = document.createElement("li");
    listItem.textContent = productName;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    productList.appendChild(listItem);
    productInput.value = "";
  }
});

productList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    const listItem = target.parentElement;
    if (target.textContent === "Delete") {
      productList.removeChild(listItem);
    } else if (target.textContent === "Edit") {
      const input = document.createElement("input");
      input.type = "text";
      input.value = listItem.firstChild.textContent;
      listItem.firstChild.replaceWith(input);
      input.focus();
      target.textContent = "Save";
      const saveHandler = () => {
        listItem.firstChild.replaceWith(document.createTextNode(input.value));
        target.textContent = "Edit";
        document.removeEventListener("click", outsideClickHandler);
      };
      const outsideClickHandler = (e) => {
        if (!listItem.contains(e.target)) {
          saveHandler();
        }
      };
      document.addEventListener("click", outsideClickHandler);
      target.addEventListener("click", saveHandler, { once: true });
    }
  }
});
