function showAsPreview(element) {
  document.getElementById("large-image").src = element.src;
  document.getElementById("large-image").alt = element.alt;

  document.querySelector(".preview-active").classList.remove("preview-active");
  element.classList.add("preview-active");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");

  document.getElementById("email").value = ""; // reset field value
  document.getElementById("email-error").textContent = "";
}

function openSignupModal() {
  document.getElementById("modal").classList.add("open");
}

function validateEmail() {
  const email = document.getElementById("email").value;

  if (email.length === 0 || !email.includes("@") || !email.includes(".de")) {
    document.getElementById("email-error").textContent = "Invalid email";
    document.getElementById("signup-btn").disabled = true;
  } else {
    document.getElementById("email-error").textContent = "";
    document.getElementById("signup-btn").disabled = false;
  }
}

function signUp() {
  const emailField = document.getElementById("email");

  console.log("sign up user with email " + emailField.value);

  closeModal();
}
