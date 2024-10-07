// src/models/Recommendation.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface Recommendation extends Document {
    entityName: string;
    entityId: mongoose.Types.ObjectId;
    type: 'group' | 'person';
    hasCloseFriends: boolean;
    userId: string;
}

const RecommendationSchema: Schema = new Schema({
    entityName: { type: String, required: true },
    entityId: { type: mongoose.Types.ObjectId, required: true },
    type: { type: String, enum: ['group', 'person'], required: true },
    hasCloseFriends: { type: Boolean, required: true },
    userId: { type: String, required: true },
});

const RecommendationModel = mongoose.model<Recommendation>('Recommendation', RecommendationSchema);
export default RecommendationModel;
