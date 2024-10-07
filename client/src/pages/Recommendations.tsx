import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { SystemServices } from "../models/enums/SystemServices";
import { getRecommendations } from "../axios/RecommendationAPI/recommendationService";
import { useState } from "react";
import { Recommendation as RecommendationType } from "../models/recommendation";
import { Recommendation } from "../components/Recommendation";

export const Recommendations = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [type, setType] = useState<'group' | 'person'>('group');
    const [onlyWithShareFriends, setOnlyWithShareFriends] = useState<boolean>(false);


    const { data: recommendations, isLoading: isLoadingRecommendations } = useQuery({
        enabled: !!userId, // Only fetch recommendations when userId is provided
        initialData: [],
        queryKey: [SystemServices.RECOMMENDATION_API, "recommendations", { type, onlyWithShareFriends }],
        queryFn: async () => {
            return await getRecommendations(userId!, type, onlyWithShareFriends).then(res => res.data) as RecommendationType[];
        },
    });

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOnlyWithShareFriends(event.target.checked);
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value as 'group' | 'person'); // Ensure correct type
    };

    return (
        <>
            <button onClick={() => navigate('/')}>logout</button>
            <button onClick={() => navigate(`/profile/${userId}`)}>profile</button>
            <h1>recommendations page</h1>
            <label>
                <input
                    type="checkbox"
                    checked={onlyWithShareFriends}
                    onChange={handleCheckboxChange}
                />
                Only show recommendations with shared friends
            </label>
            <br />
            <label>
                Select Type:
                <select value={type} onChange={handleSelectChange}>
                    <option value="group">Group</option>
                    <option value="person">Person</option>
                </select>
            </label>
            {
                isLoadingRecommendations ? (
                    <p>Loading...</p>
                ) : (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        width: '100%',
                        columnGap: 8,
                        rowGap: 8
                    }}>
                        {
                            recommendations.map((recommendation) => (
                                <Recommendation key={recommendation._id} {...recommendation} />
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}