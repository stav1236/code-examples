import { useState } from "react";
import { Post as PostType } from "../models/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPost } from "../axios/MediaAPI/postService";
import { SystemServices } from "../models/enums/SystemServices";
import { useParams } from "react-router-dom";

interface PostProps extends PostType {

}

export const Post = (props: PostProps) => {
    const { userId } = useParams();
    const [updatedContent, setUpdatedContent] = useState(props.content); // Initialize state with the current post content
    const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
    const queryClient = useQueryClient();

    // Define mutation for editing a post
    const editPostMutation = useMutation({
        mutationFn: async (updatedPost: { _id: string; content: string }) => {
            return await editPost(updatedPost._id, updatedPost.content);
        },
        onSuccess: () => {
            // Invalidate the posts query to refetch updated data
            queryClient.invalidateQueries({ queryKey: [SystemServices.MEDIA_API, "posts", userId] });
        },
    });

    const handleSaveEdit = () => {
        if (updatedContent && updatedContent !== props.content) {
            editPostMutation.mutate({ _id: props._id, content: updatedContent });
            setIsEditing(false); // Exit edit mode after saving
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 200,
            padding: 2,
            background: 'gray',
            borderStyle: 'solid',
            borderWidth: 3,
            borderColor: 'black'
        }}>

            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={updatedContent}
                        onChange={(e) => setUpdatedContent(e.target.value)} // Update state as user types
                    />
                    <button onClick={handleSaveEdit}>Save</button>
                </div>
            ) : (
                <div>
                    <span>{props.content}</span>
                    <button onClick={() => setIsEditing(true)}>Edit Post</button> {/* Enter edit mode */}
                </div>
            )}
        </div>
    )
} 