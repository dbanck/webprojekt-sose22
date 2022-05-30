function enlarge(element) {
  const largeImage = document.getElementById("large-image");

  largeImage.src = element.src;
  largeImage.alt = element.alt;

  const oldActive = document.querySelector(".preview-active");
  oldActive.classList.remove("preview-active");

  element.classList.add("preview-active");
}

function openSignupModal() {
  document.getElementById("modal").classList.add("open");
}

function closeSignupModal() {
  const emailErrorElement = document.getElementById("email-error");
  const emailField = document.getElementById("email");
  const signUpBtn = document.getElementById("signup-btn");

  emailErrorElement.textContent = "";
  emailField.value = "";
  signUpBtn.disabled = true;

  document.getElementById("modal").classList.remove("open");
}

function validateEmail() {
  const emailField = document.getElementById("email");
  const email = emailField.value;

  const emailErrorElement = document.getElementById("email-error");
  const signUpBtn = document.getElementById("signup-btn");

  // valide Email
  if (email.includes("@") && email.includes(".de")) {
    emailErrorElement.textContent = "";
    signUpBtn.disabled = false;

    console.log("@ vorhanden und .de vorhanden");
  } else {
    // invalide Email
    emailErrorElement.textContent = "Invalid email";
    signUpBtn.disabled = true;

    console.error("@ nicht oder .de nicht vorhanden");
  }
}

function signup() {
  const emailField = document.getElementById("email");

  console.log("Sign up user with email " + emailField.value);

  closeSignupModal();
}
