import "./style.css";
import { InputValidator } from "./inputValidator.js";
import { validateName, validateEmail, validatePassword } from "./validators.js";

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

new InputValidator(firstName, validateName);
new InputValidator(lastName, validateName);
new InputValidator(email, validateEmail);
new InputValidator(password, validatePassword);

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
  }
});