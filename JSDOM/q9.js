const form = document.createElement("form");
document.body.appendChild(form);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Name";
form.appendChild(nameInput);

const nameError = document.createElement("div");
nameError.style.color = "red";
form.appendChild(nameError);

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email";
form.appendChild(emailInput);

const emailError = document.createElement("div");
emailError.style.color = "red";
form.appendChild(emailError);

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Password";
form.appendChild(passwordInput);

const passwordError = document.createElement("div");
passwordError.style.color = "red";
form.appendChild(passwordError);

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
form.appendChild(submitButton);

const successMessage = document.createElement("div");
successMessage.style.color = "green";
successMessage.style.display = "none";
document.body.appendChild(successMessage);

function validateField(input, errorDiv, validator) {
  const value = input.value.trim();
  if (!validator(value)) {
    errorDiv.textContent = "Invalid input";
    return false;
  } else {
    errorDiv.textContent = "";
    return true;
  }
}

nameInput.addEventListener("input", () =>
  validateField(nameInput, nameError, (v) => v.length > 0)
);
emailInput.addEventListener("input", () =>
  validateField(emailInput, emailError, (v) => v.includes("@"))
);
passwordInput.addEventListener("input", () =>
  validateField(passwordInput, passwordError, (v) => v.length >= 6)
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isNameValid = validateField(nameInput, nameError, (v) => v.length > 0);
  const isEmailValid = validateField(emailInput, emailError, (v) =>
    v.includes("@")
  );
  const isPasswordValid = validateField(
    passwordInput,
    passwordError,
    (v) => v.length >= 6
  );
  if (isNameValid && isEmailValid && isPasswordValid) {
    successMessage.textContent = "Form Submitted Successfully";
    successMessage.style.display = "block";
    form.style.display = "none";
  }
});
