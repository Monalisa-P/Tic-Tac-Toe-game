let password=document.querySelector("#password").value
let con_pas=document.querySelector("#con-password").value
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("con-password");
const registerBtn = document.getElementById("submit-btn");

registerBtn.addEventListener("click", (e) => {

  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password!== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }
  console.log("Passwords match. Registering user...");
});
