import { mediaApiAxios } from './mediaApiAxios';

const getAllPostOfUser = async (userId: string) => {
    return await mediaApiAxios.get(`/posts/${userId}`);
};

const editPost = async (postId: string, content: string) => {
    return await mediaApiAxios.put(`/posts/${postId}`, { content });
};

export { getAllPostOfUser, editPost };