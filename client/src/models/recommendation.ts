export interface Recommendation {
    _id: string;
    entityName: string;
    entityId: string;
    type: 'group' | 'person';
    hasCloseFriends: boolean;
    userId: string;
}