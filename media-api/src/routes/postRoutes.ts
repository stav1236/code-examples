import { Router } from 'express';
import PostModel from '../models/post';

const router = Router();

// Get all posts of a user
router.get('/posts/:userId', async (req, res) => {
    try {
        const posts = await PostModel.find({ userId: req.params.userId });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a post's content
router.put('/posts/:postId', async (req, res) => {
    try {
        const updatedPost = await PostModel.findByIdAndUpdate(
            req.params.postId,
            { content: req.body.content },
            { new: false }
        );
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
