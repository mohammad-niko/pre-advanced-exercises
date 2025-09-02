import express from "express";
import dotenv from "dotenv";
import connectDB from "./connect.js";
import path from "path";
import { fileURLToPath } from "url";
import { logger } from "./logger.js";
import router from "./member.routes.js";
import cors from "cors";

const server = express();
// find env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../../.env") });
const port = process.env.PORT || 6000;
const mongoUri = process.env.MONGO_URI;
const membersRouter = router;

server.use(cors());
server.use(logger);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// main route:
server.get("/", (req, res) => {
  res.json({ message: "hellow this is the main route❤️" });
});

// members route:
server.use("/api/members", membersRouter);

server.use((req, res, next) => {
  res.status(404).json({ message: "404 page not found!❌" });
});

server.listen(port, async () => {
  try {
    await connectDB(mongoUri);
    console.log(`server is running on port ${port} ...✅`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
