// services/order.service.js
const {saveOrder} = require("./repo.js");
async function createOrder(user, amount) {
  if (!user) {
    throw new Error("User is required");
  }

  if (amount <= 0) {
    throw new Error("Invalid amount");
  }

  const order = {
    userId: user.id,
    amount,
    createdAt: Date.now(),
  };

  return saveOrder(order);
}


module.exports =  createOrder;
