import { Router } from "express";
import { getProducts ,getProductsWithId,postData , patchData,deleteData} from "./controllers.js";

const router = Router();


 router.get("/",getProducts)
 router.get("/:id",getProductsWithId)
 router.post("/",postData)
 router.patch("/:id",patchData)
 router.delete("/:id",deleteData)

export default router; 