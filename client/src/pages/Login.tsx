import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>login page</h1>
            <button onClick={() => navigate('/profile/1')}>user 1</button>
            <button onClick={() => navigate('/profile/2')}>user 2</button>
        </>
    )
};