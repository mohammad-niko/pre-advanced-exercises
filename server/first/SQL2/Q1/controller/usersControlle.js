import { posts, users } from "../models.js";

export async function getAllUser(req, res) {
  try {
    const allUsers = await users.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("Failed to fetch users " + error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
}

export async function postUser(req, res) {
  const data = req.body;
  try {
    const createUser = await users.create(data);
    res
      .status(201)
      .json({ message: "users added successsflly✅", users: createUser });
  } catch (error) {
    console.log("Failed to create user " + error);
    res.status(500).json({ error: "Failed to create user" });
  }
}

export async function putUser(req, res) {
  const { id } = req.params;
  const data = req.body;
  console.log(id);
  try {
    await users.update(data, { where: { id: id } });
    const updateUser = await users.findOne({ where: { id: id } });
    res
      .status(201)
      .json({ message: "user update successfully", user: updateUser });
  } catch (error) {
    console.log("Failed to update user " + error);
    res.status(500).json({ error: "Failed to update user" });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await users.findByPk(id);
    if (!user) return res.status(404).json({ message: "user not found" });
    await users.destroy({ where: { id: id } });
    res.status(201).json({ message: "user delete successfullyy" });
  } catch (error) {
    console.log("Failed to delete user " + error);
    res.status(500).json({ error: "Failed to delete user" });
  }
}

export async function getAllPostForAUser(req,res) {
  const { userId } = req.params;
  try {
    const getAll = await posts.findAll({ where: { userId: userId } });
    res.status(201).json(getAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get user posts" });
  }
}

export async function postAPostForAUser(req,res) {
  const { userId } = req.params;
  const data = req.body;
  try {
    const createPost = await posts.create({...data,userId:userId});
    res
      .status(201)
      .json({ message: "post added successsflly✅", post: createPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create post for user" });
  }
}
