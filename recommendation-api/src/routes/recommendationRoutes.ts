// src/routes/recommendationRoutes.ts
import express from 'express';
import RecommendationModel from '../models/recommendation';

const router = express.Router();

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { type, onlyWithShareFriends } = req.query;

    try {
        const recommendations = await RecommendationModel.find({
            userId,
            type,
            ...(onlyWithShareFriends == 'true' && { hasCloseFriends: true }), // Filter by hasCloseFriends if true
        });

        res.json(recommendations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
