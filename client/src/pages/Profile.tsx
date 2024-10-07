import { useNavigate, useParams } from "react-router-dom"
import { SystemServices } from "../models/enums/SystemServices";
import { getAllPostOfUser } from "../axios/MediaAPI/postService";
import { useQuery } from "@tanstack/react-query";
import { Post as PostType } from "../models/post";
import { Post } from "../components/Post";

export const Profile = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const getPostQuery = useQuery({
        enabled: !!userId,
        initialData: [],
        queryKey: [SystemServices.MEDIA_API, "posts", userId],
        queryFn: async () => {
            return await getAllPostOfUser(userId!).then(res => res.data) as PostType[];
        },
    });

    return (
        <>
            <button onClick={() => navigate('/')}>logout</button>
            <button onClick={() => navigate(`/recommendations/${userId}`)}>recommendations</button>
            <h1>{`user ${userId} profile page`} </h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: '100%',
                columnGap: 8,
                rowGap: 8
            }}>
                {getPostQuery.data.map(post => (
                    <Post key={post._id} {...post} />
                ))}
            </div>
        </>
    )
}