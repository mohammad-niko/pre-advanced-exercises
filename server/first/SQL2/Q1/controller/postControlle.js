import { posts } from "../models.js";


export async function putPost(req, res) {
  const { id } = req.params;
  const data = req.body
  try {
    await posts.update(data,{ where: { id: id } });
    const find = await posts.findOne({ where: { id: id } });
    res.status(201).json({ message: "update post successfully", post: find });
  } catch (error) {
    console.log("Error to update " + error);
    res.status(500).json({ error: "Failed to update post for user" });
  }
}

export async function deletePost(req, res) {
  const { id } = req.params;
  try {
    const find = await posts.findOne({ where: { id: id } });
    if (!find) return res.status(404).json({ message: "post not found" });
    await posts.destroy({ where: { id: id } });
    res.status(201).json({ message: "deleted post successfully" });
  } catch (error) {
    console.log("Error to Delete" + error);
    res.status(500).json({ error: "Failed to delete post" });
  }
}
