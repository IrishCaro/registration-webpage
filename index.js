const btnTheme = document.getElementById("btnTheme");
btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("registration");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value.length < 3) {
    showMessage("Username must be at least 3 characters", "red");
  } else if (!email.value.includes("@")) {
    showMessage("Invalid email address", "red");
  } else if (password.value.length < 6) {
    showMessage("Password must be at least 6 characters", "red");
  } else {
    showMessage("Registration successful!", "green");
  }
  });

  function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

  document.getElementById("btnreset").addEventListener("click", () => {
  username.value = "";
  email.value = "";
  password.value = "";
  showMessage("", "black");
});

function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

const outerDiv = document.getElementById("outerDiv");
const innerBtn = document.getElementById("innerBtn");

// Bubbling (default)
outerDiv.addEventListener("click", () => {
  console.log("Div Clicked");
});

innerBtn.addEventListener("click", (e) => {
  console.log("Button Clicked");
  e.stopPropagation();
});
outerDiv.addEventListener(
  "click",
  () => {
    console.log("Div Clicked (Capturing Phase)");
  },
  { capture: true }
);