// function circle(num) {
//     return 3.14 * num ** 2
// }

// module.exports ={circle};

const {
  readFile,
  writeFile,
  appendFile,
  unlink,
  lchown,
  rmdir,
  mkdir,
  existsSync,
  rename,
  readdir,
} = require("node:fs");

// Create a file and write content to it (overwrites if it already exists)
// writeFile("mmad.js", "Hello Node.js mmad", (error) => {
//   if (error) {
//     console.log(error);
//   }
// });

// Read a file asynchronously
// readFile("mmad.js", "utf8", (error, data) => {
//   if (error) return console.log(error);
//   return data;
// });



// Append new content to an existing file (does not overwrite)
// appendFile("example.txt", "\nThis is new content.", (err) => {
//   if (err) throw err;
//   console.log("Content added!");
// });

// Delete a file
// unlink("mmad.js", (error) => {
//   if (error) return console.log(error);
//   console.log("File deleted");
// });

// Create a new folder
// mkdir("public", (err) => {
//   if (err) throw err;
//   console.log("Folder created!");
// });

// Remove a folder (only works if folder is empty)
// rmdir("public", (err) => {
//   if (err) return console.log(err);
//   console.log("Folder removed!");
// });

// Check if a file or folder exists (synchronous)
// if (existsSync("mmad.js")) {
//   console.log("File exists!");
// } else {
//   console.log("File does not exist.");
// }

// Rename  a file/folder
// rename("example.js", "mmad.js", (error) => {
//   if (error) return console.log(error);
//   console.log("File renamed");
// });

//  move a file/folder
// rename("exe1.js", "../public/exe1.js", (error) => {
//     if (error) return console.log(error);
//     console.log("File moved");
// });

// Read all files and folders inside a directory
// readdir("../public", (err, files) => {
//   if (err) return console.log(err);
//   console.log(files); // Example output: ['file1.txt', 'file2.txt', 'subfolder']
// });
