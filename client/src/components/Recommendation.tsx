import { Recommendation as RecommendationType } from "../models/recommendation";

interface RecommendationProps extends RecommendationType {

}

export const Recommendation = (props: RecommendationProps) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 200,
            padding: 2,
            background: 'lightblue',
            borderStyle: 'solid',
            borderWidth: 3,
            borderColor: 'black'
        }}>
            <span>{props.entityName}</span>
            <span>{props.hasCloseFriends ? 'has close friends' : 'has not close friends'}</span>
        </div>
    )
} 