import { Router } from "express";
import { getAllBlogs, createBlog } from "../controllers/blogController";

const router = Router();

// Get all blog posts
router.get("/", getAllBlogs);

// POST new blog post
router.post("/", createBlog);

export default router;