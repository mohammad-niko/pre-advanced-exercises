import moment from "moment";

import express from "express";
const server = express();



const student = [
  { name: "mohammad", age: 25 },
  { name: "ali", age: 22 },
  { name: "jasem", age: 23 },
  { name: "zahra", age: 21 },
];

server.use(express.json());
server.use((req, res, next) => {
  console.log(`${req.method} : ${req.url}`);
  next();
});

server.get("/", (req, res) => {
  res.send("hello,this is the main rout");
});

server.get("/student", (req, res) => {
  return res.send(student);
});

server.get("/student/:name", (req, res) => {
  const params = req.params.name;
  const query = req.query.age ? parseInt(req.query.age) : null;

  const filter = student.filter(({ name, age }) => {
    if (query) {
      return name === params && age === query;
    } else {
      return name === params;
    }
  });
  if (filter.length == 0) return res.send("error 404 : not found❌");

  return res.send(filter);
});

server.get("/time", (req, res) => {
  const time = moment().format("MMMM Do YYYY, h:mm:ss a");

  res.send(time);
});

server.post("/student", (req, res) => {
  const postData = req.body;
  const errors = [];

  if (!Array.isArray(postData)) {
    return res.status(400).json({ error: "❌ data must be an array" });
  }
  postData.forEach((item, index) => {
    if (!item.name || !item.age) {
      errors.push(`❌ item ${index + 1} is missing name or age`);
    } else {
      student.push(item);
    }
  });

  if (errors.length > 0) return res.status(400).json({ error: errors });

  res.json({ message: `✅ students added successfully` });
});

server.get(/.*/, (req, res) => {
  res.status(404).send("❌ error 404 : Page not found");
});

// server.get("/*", (req, res) => {
//   res.status(404).send("❌ Page not found");
// });

server.listen("5000", () => {
  console.log("server is running on port 5000");
});
