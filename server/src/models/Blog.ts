import mongoose, {Document, Schema} from "mongoose";

export interface IBlog extends Document {
    title: string;
    content: string;    
    excerpt: string;
    date: string;
    status: 'draft' | 'published';
    author: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

const blogSchema: Schema = new Schema<IBlog>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
    author: { type: String, default: 'Sumit Pandey' },
    tags: { type: [String], default: [] },
}, {
    timestamps: true,
});

export default mongoose.model<IBlog>('Blog', blogSchema);

