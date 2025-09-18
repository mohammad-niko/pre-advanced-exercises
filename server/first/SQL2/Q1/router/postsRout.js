import { Router } from "express";
import { deletePost, putPost } from "../controller/postControlle.js";

const postRoute =  Router();

//Update a Post: Implement:
postRoute.put("/:id",putPost)
//Delete a Post:
postRoute.delete("/:id",deletePost)

export default postRoute;