import { recommendationApiAxios } from './recommendationApiAxios';

const getRecommendations = async (useId: string, type: string, onlyWithShareFriends: boolean) => {
    return await recommendationApiAxios(`/recommendations/${useId}`, {
        params: { type, onlyWithShareFriends },
    });
};

export { getRecommendations };