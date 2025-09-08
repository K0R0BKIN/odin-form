export function validateName(value) {
  return value.length >= 2;
}

export function validateEmail(value) {
  return /\S+@\S+\.\S+/.test(value);
}

export function validatePassword(value) {
  return value.length >= 6;
}