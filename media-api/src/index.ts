import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import postRoutes from './routes/postRoutes';
import cors from 'cors'

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Connect to the database
connectDB().then(() => addSamplePosts());

//enable cors
app.use(cors())

// Middleware
app.use(express.json());

// Routes
app.use('/', postRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import PostModel from './models/post';
import mongoose from 'mongoose';

const addSamplePosts = async () => {
    const collections = await mongoose?.connection?.db?.listCollections({ name: 'posts' }).toArray();
    if (collections && collections?.length > 0) {
        await mongoose?.connection?.db?.dropCollection('posts');
        console.log('Posts collection dropped');
    }

    const posts = [
        { content: 'Post 1 for user 1', userId: '1' },
        { content: 'Post 2 for user 1', userId: '1' },
        { content: 'Post 3 for user 1', userId: '1' },
        { content: 'Post 1 for user 2', userId: '2' },
        { content: 'Post 2 for user 2', userId: '2' },
        { content: 'Post 3 for user 2', userId: '2' },
    ];

    try {
        await PostModel.insertMany(posts);
        console.log('Sample posts added');
    } catch (error) {
        console.error('Error adding posts', error);
    }
};
