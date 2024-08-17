import express from "express";
import multer from "multer";

//Router init
const router = express.Router();

//Multer configurations
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 },
});

router.get("/get-all-posts");
router.get("/get-post");
router.post("/create-post");
router.put("/update-post");
router.delete("/delete-post");

//Exports
export default router;
