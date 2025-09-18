import { db } from "./conectDB.js";
import { DataTypes } from "sequelize";
export const users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notNull: { msg: "Email is required" },
      notEmpty: { msg: "Email cannot be empty" },
      isEmail: { msg: "Must be a valid email" },
    },
  },
});

export const posts = db.define("posts", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

users.hasMany(posts, { foreignKey: "userId" });
posts.belongsTo(users, { foreignKey: "userId" });
