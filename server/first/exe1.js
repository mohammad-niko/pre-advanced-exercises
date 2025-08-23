// const { writeFile, mkdir } = require("node:fs");
// const { say, think } = require("cowsay");
// const { rainbow } = require("colors");

// mkdir("public",(err)=>{
//     if(err) return console.log(err);

//     writeFile('./public/mmad.js',"yes",(err)=>{
//     if(err) return console.log(err);
//     console.log("sucssful");
//     })
// })

// console.log(
//   think({
//     text: "I'm a moooodule",
//     e: "oO",
//     T: "U ",
//   }).rainbow
// );
// //
// number = Number(process.argv[2]);
// console.log(3.14 * number ** 2);

// ======================================================================================================================

// import moment from "moment";

// import express from "express";
// const server = express();

// server.get("/cat", (req, res) => {
//   res.send("MeeW!");
// });

// server.get("/hello", (req, res) => {
//   res.send("hello from express");
// });

// server.get("/book", (req, res) => {
//   res.send("hello, this is a book rout");
// });

// ================================================================

// const users = [
//     { name: "ali", color: "red" },
//     { name: "mmad", color: "green" },
//     { name: "ali", color: "blue" },
//     { name: "agagoli", color: "blue" },
//     { name: "hajmmad", color: "wigth" },
//     { name: "mmad", color: "black" },

// ];
// server.get("/users/:name", (req, res) => {
//   const params = req.params.name;
//   const query = req.query.color;

//   if (!query) {
//     const filter = users.filter(
//       ({ name, color }) => name === params && color === query
//     );
//     if (filter.length == 0) return res.send("error 404 : not found❌");

//     return res.send(filter);
//   } else {
//     const filter = users.filter(
//       ({ name, color }) => name === params && color === query
//     );

//     if (filter.length === 0) return res.send("error 404 : not found❌");

//     return res.send(filter);
//   }
// });

// ================================================================

// const users = [
//     { name: "ali", color: "red" },
//     { name: "mmad", color: "green" },
//     { name: "ali", color: "blue" },
//     { name: "agagoli", color: "blue" },
//     { name: "hajmmad", color: "wigth" },
//     { name: "mmad", color: "black" },

// ];

// server.get("/users/:name", (req, res) => {
//   const params = req.params.name;
//   const query = req.query.color;

//   const filter = users.filter(({ name, color }) => {
//     if (query) {
//       return name === params && color === query;
//     } else {
//       return name === params;
//     }
//   });
//   if (filter.length == 0) return res.send("error 404 : not found❌");

//   return res.send(filter);
// });

// ================================================================

// when give data first of all chang the data that the obj

// const student = [
//   { name: "mohammad", age: 25 },
//   { name: "ali", age: 22 },
//   { name: "jasem", age: 23 },
//   { name: "zahra", age: 21 },
// ];

// server.use(express.json());
// server.use((req, res, next) => {
//   console.log(`${req.method} : ${req.url}`);
//   next();
// });

// server.get("/", (req, res) => {
//   res.send("hello,this is the main rout");
// });

// server.get("/student", (req, res) => {
//   return res.send(student);
// });

// server.get("/student/:name", (req, res) => {
//   const params = req.params.name;
//   const query = req.query.age ? parseInt(req.query.age) : null;

//   const filter = student.filter(({ name, age }) => {
//     if (query) {
//       return name === params && age === query;
//     } else {
//       return name === params;
//     }
//   });
//   if (filter.length == 0) return res.send("error 404 : not found❌");

//   return res.send(filter);
// });

// server.get("/time", (req, res) => {
//   const time = moment().format("MMMM Do YYYY, h:mm:ss a");

//   res.send(time);
// });

// server.post("/student", (req, res) => {
//   const postData = req.body;
//   const errors = [];

//   if (!Array.isArray(postData)) {
//     return res.status(400).json({ error: "❌ data must be an array" });
//   }
//   postData.forEach((item, index) => {
//     if (!item.name || !item.age) {
//       errors.push(`❌ item ${index + 1} is missing name or age`);
//     } else {
//       student.push(item);
//     }
//   });

//   if (errors.length > 0) return res.status(400).json({ error: errors });

//   res.json({ message: `✅ students added successfully` });
// });

// server.get(/.*/, (req, res) => {
//   res.status(404).send("❌ error 404 : Page not found");
// });

// // server.get("/*", (req, res) => {
// //   res.status(404).send("❌ Page not found");
// // });

// server.listen("5000", () => {
//   console.log("server is running on port 5000");
// });
// ======================================================================================================================

// import express from "express";
// const server = express();

// const port = 3500;
// const rout = "/chocolate";
// const rout2 = "/multiply";

// server.get(rout, (req, res) => {
//   const { query } = req;
//   const  amount  = Number( query.amount);
//   if (Object.keys(query).length > 1) return res.send("you can not set 2 qurey");
//   if(!amount) return res.send("you can just type numbers")
//   res.send(`you want ${amount} chocolate`);
// });

// function mult(val1, val2) {
//   return val1 * val2;
// }

// server.get(rout2, (req, res) => {
//   const { query } = req;
//   const  value1  = Number(query.value1);
//   const  value2  = Number(query.value2);

//   if (!value1 || !value2)
//     return res.status(400).send("❌ you must type just numbers");

//   if (Object.keys(query).length > 2)
//     return res.send("you can not set mor than 2 qurey");
//   res.send(`Result is ${mult(value1, value2)}`);
// });

// server.use((req, res, next) => {
//   if (req.method === "POST")
//     return res.json({ massage: "hala harchi: error❌" });

//   next();
// });
// server.listen(port, () => {
//   console.log(`server runing in ${port}`);
// });

// ======================================================================================================================
