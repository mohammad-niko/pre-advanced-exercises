import { Router } from "express";
import {
  getAllFacultyMembers,
  addFacultyMember,
  updateFacultyMember,
  deleteFacultyMember,
} from "./controllers.js";
const router = Router();

// get all members:
router.get("/", getAllFacultyMembers);

// post a member:
router.post("/", addFacultyMember);

// patch a member:
router.patch("/:id", updateFacultyMember);

// delete a member bu id:
router.delete("/:id", deleteFacultyMember);

export default router;
