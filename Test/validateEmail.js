function validateEmail(email) {
  if (!email) throw new Error("Email is required");
  return email.includes("@");
}
module.exports = validateEmail;