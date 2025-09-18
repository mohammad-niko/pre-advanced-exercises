import { Router } from "express";
import { deleteUser, getAllPostForAUser, getAllUser , postAPostForAUser, postUser, putUser} from "../controller/usersControlle.js";

const userRoute = Router();
//users:
userRoute.get("/",getAllUser);
userRoute.post("/",postUser);
userRoute.put("/:id",putUser);
userRoute.delete("/:id",deleteUser);

// posts:
//  Get all Posts for a User
userRoute.get("/:userId/posts",getAllPostForAUser);
// Create a Post for a User
userRoute.post("/:userId/posts",postAPostForAUser);

export default userRoute