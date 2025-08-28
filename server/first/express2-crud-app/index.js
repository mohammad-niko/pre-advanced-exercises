import express from "express";
// import bodyParser from 'body-parser';

import dotenv from "dotenv";
dotenv.config({ quiet: true });

import cors from "cors";

import { logger } from "./middleware/logger.js";

import router from "./product.routes.js";

const server = express();
const port = process.env.PORT || 5500;
const productRoutes = router;

//Middelware:
server.use(cors());
server.use(logger);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// routes:
server.get("/", (req, res) => {
  res.send("Welcome to the Products API");
});

server.use("/products", productRoutes);


//middelware:
server.use((req, res) => {
  res.status(404).send("❌ Page not found");
});

server.listen(port, () => {
  console.log(`server runing on ${port}`);
});
