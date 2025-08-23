/*
1- Write code to import and log the contents of a JSON file named data.json.

2- Implement a function named login that accepts two parameters, username and password. Inside this function, search the imported JSON data for a user object where both the username and password match the provided arguments.

3- Modify the login function to return the matched user object if the credentials are correct. If no match is found, return a message indicating "email or password incorrect."

4- Write code to access the username and password from the command-line arguments passed when running the script.
hint: process.argv

5- Use the command-line arguments as inputs to the login function and log the result to the console.
*/

// const { readFile } = require("node:fs");

function login(data, us, pas) {
  const user = data.find(
    ({ username, password }) => username === us && password === pas
  );
  if (!user) return console.log("email or password incorrect.");
  return user;
}

// readFile("./first/nodejs-homeworks/data.json", "utf8", (error, data) => {
//   if (error) return console.log(error);
//   const jsonParse = JSON.parse(data);
//   console.log(jsonParse);

//   console.log(login(jsonParse, process.argv[2], process.argv[3]));
// });





const { readFile } = require("node:fs/promises");


async function main() {
  try {
    
    const data = await readFile("./first/nodejs-homeworks/data.json", "utf8");
    const users = JSON.parse(data);
    console.log(users);

    const username = process.argv[2];
    const password = process.argv[3];

console.log(login(users, username, password));
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();