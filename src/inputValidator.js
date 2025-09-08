export class InputValidator {
  constructor(input, validateFn) {
    this.input = input;
    this.validateFn = validateFn;

    this.input.addEventListener("change", () => this.check());
  }

  check() {
    if (this.validateFn(this.input.value)) {
      this.input.setCustomValidity("");
    } else {
      this.input.setCustomValidity("invalid");
    }
  }
}
