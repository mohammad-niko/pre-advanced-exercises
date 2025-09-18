import { Sequelize } from "sequelize";
import {MYSQL_URI} from './config.js';

export const db = new Sequelize(MYSQL_URI, {
  logging: false,
});

try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
