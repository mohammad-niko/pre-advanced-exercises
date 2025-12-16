// payment.service.js
const { charge } = require("./payment.api.js");

async function pay(amount) {
  if (amount <= 0) throw new Error("Invalid amount");
  return charge(amount);
}

module.exports = pay;
