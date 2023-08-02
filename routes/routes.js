import express from "express";
import { uploadImage , downloadImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";
const router = express.Router();

// we will need to create a middleware to get the file displayed
router.post('/upload' , upload.single('file') , uploadImage);
// now we will get the file in the console.log in the file field.
router.get('/file/:Id' , downloadImage);

export default router;