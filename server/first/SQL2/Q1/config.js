import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../../../.env") ,quiet:true});

export const MYSQL_URI = process.env.MYSQL_URI;
export const PORT = process.env.PORT || 6000;
