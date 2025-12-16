async function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("Insufficient funds");
  }

  return balance - amount;
}

module.exports = withdraw;
