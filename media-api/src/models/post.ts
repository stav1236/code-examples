import mongoose, { Schema, Document } from 'mongoose';

interface Post extends Document {
    content: string;
    userId: string;
}

const PostSchema: Schema = new Schema({
    content: { type: String, required: true },
    userId: { type: String, required: true },
});

const PostModel = mongoose.model<Post>('Post', PostSchema);
export default PostModel;
