let currentStep = 1;
const steps = [
  { label: "Name", input: document.createElement("input"), required: true },
  { label: "Email", input: document.createElement("input"), required: true },
  { label: "Password", input: document.createElement("input"), required: true },
];

const formContainer = document.createElement("div");
document.body.appendChild(formContainer);

const stepIndicator = document.createElement("div");
formContainer.appendChild(stepIndicator);

const inputContainer = document.createElement("div");
formContainer.appendChild(inputContainer);

const buttonContainer = document.createElement("div");
formContainer.appendChild(buttonContainer);

const backButton = document.createElement("button");
backButton.textContent = "Back";
buttonContainer.appendChild(backButton);

const nextButton = document.createElement("button");
nextButton.textContent = "Next";
buttonContainer.appendChild(nextButton);

const summary = document.createElement("div");
summary.style.display = "none";
document.body.appendChild(summary);

function updateStep() {
  stepIndicator.textContent = `Step ${currentStep} of 3: ${
    steps[currentStep - 1].label
  }`;
  inputContainer.innerHTML = "";
  inputContainer.appendChild(steps[currentStep - 1].input);
  backButton.disabled = currentStep === 1;
  nextButton.textContent = currentStep === 3 ? "Submit" : "Next";
}

function validateStep() {
  const step = steps[currentStep - 1];
  const value = step.input.value.trim();
  if (step.required && !value) return false;
  if (step.label === "Email" && !value.includes("@")) return false;
  if (step.label === "Password" && value.length < 6) return false;
  return true;
}

nextButton.addEventListener("click", () => {
  if (validateStep()) {
    if (currentStep < 3) {
      currentStep++;
      updateStep();
    } else {
      formContainer.style.display = "none";
      summary.style.display = "block";
      summary.innerHTML = `<h2>Summary</h2><p>Name: ${
        steps[0].input.value
      }</p><p>Email: ${steps[1].input.value}</p><p>Password: ${"*".repeat(
        steps[2].input.value.length
      )}</p>`;
    }
  } else {
    alert("Please fill in the required field correctly.");
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateStep();
  }
});

updateStep();
