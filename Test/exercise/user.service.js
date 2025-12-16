const { log } = require("./log");

function createUser(name) {
  if (!name) throw new Error("Name is required");

  log(`User ${name} created`);
  return { name };
}

module.exports = createUser;