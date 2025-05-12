import { Request, Response} from "express";
import Blog from "../models/Blog";

// GET all blog posts

export const getAllBlogs = async (_req: Request, res: Response): Promise<void> => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blog posts" });
    }
};


// POST new blog post

export const createBlog = async (req: Request, res: Response) => {
    try {
        const { title, content, expert, date, status, author, tags} = req.body;

        const newBlog = new Blog({
            title,
            content,
            expert,
            date,
            status,
            author,
            tags
        });
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(500).json({message: 'Failed to create post', error})
    }
}