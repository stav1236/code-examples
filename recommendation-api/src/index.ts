import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import recommendationRoutes from './routes/recommendationRoutes';

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Connect to the database
connectDB().then(() => addSampleRecommendations());

// Middleware
app.use(express.json());

// Routes
app.use('/recommendations', recommendationRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import mongoose from 'mongoose';
import RecommendationModel from './models/recommendation';

const addSampleRecommendations = async () => {
    const collections = await mongoose?.connection?.db?.listCollections({ name: 'recommendations' }).toArray();
    if (collections && collections?.length > 0) {
        await mongoose?.connection?.db?.dropCollection('recommendations');
        console.log('Recommendations collection dropped');
    }

    const recommendations = [
        // User ID 1 - Groups
        { entityName: 'Group A', entityId: new mongoose.Types.ObjectId(), type: 'group', hasCloseFriends: true, userId: '1' },
        { entityName: 'Group B', entityId: new mongoose.Types.ObjectId(), type: 'group', hasCloseFriends: false, userId: '1' },
        { entityName: 'Group C', entityId: new mongoose.Types.ObjectId(), type: 'group', hasCloseFriends: true, userId: '1' },

        // User ID 1 - Persons
        { entityName: 'Person A1', entityId: new mongoose.Types.ObjectId(), type: 'person', hasCloseFriends: true, userId: '1' },
        { entityName: 'Person B1', entityId: new mongoose.Types.ObjectId(), type: 'person', hasCloseFriends: false, userId: '1' },
        { entityName: 'Person C1', entityId: new mongoose.Types.ObjectId(), type: 'person', hasCloseFriends: true, userId: '1' },

        // User ID 2 - Groups
        { entityName: 'Group A2', entityId: new mongoose.Types.ObjectId(), type: 'group', hasCloseFriends: true, userId: '2' },
        { entityName: 'Group B2', entityId: new mongoose.Types.ObjectId(), type: 'group', hasCloseFriends: false, userId: '2' },
        { entityName: 'Group C2', entityId: new mongoose.Types.ObjectId(), type: 'group', hasCloseFriends: true, userId: '2' },

        // User ID 2 - Persons
        { entityName: 'Person A2', entityId: new mongoose.Types.ObjectId(), type: 'person', hasCloseFriends: true, userId: '2' },
        { entityName: 'Person B2', entityId: new mongoose.Types.ObjectId(), type: 'person', hasCloseFriends: false, userId: '2' },
        { entityName: 'Person C2', entityId: new mongoose.Types.ObjectId(), type: 'person', hasCloseFriends: true, userId: '2' },
    ];

    try {
        await RecommendationModel.insertMany(recommendations);
        console.log('Sample recommendations added');
    } catch (error) {
        console.error('Error adding posts', error);
    }
};
