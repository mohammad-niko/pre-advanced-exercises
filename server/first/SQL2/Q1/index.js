import express from "express";
import cors from "cors";
import { logger } from "./logger.js";
import { db } from "./conectDB.js";
import { PORT } from "./config.js";
import { users, posts } from "./models.js";
import userRoute from "./router/usersRout.js";
import postRoute from "./router/postsRout.js";

const server = express();

server.use(cors());
server.use(logger);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// main route:
server.get("/", (req, res) => {
  res.json({ message: "Hello this is the main route❤️" });
});

server.use("/api/users",userRoute);
server.use("/api/posts",postRoute)

server.use((req, res) => {
  res.status(404).json({ error: "not found page" });
});

server.listen(PORT, async () => {
  try {
    // await db.sync({ force: true });
    console.log("All Models Synced ✅");
    console.log(`server run in port : ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
