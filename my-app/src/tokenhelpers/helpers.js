import { useState } from "react";

export default function useToken() {
    // Gets token from Session storage
    const getToken = () => {
        const tokenString = sessionStorage.getItem("token");
        return tokenString;
    };

    const [token, setToken] = useState(getToken());


    // Saves token to Session storage
    const saveToken = (userToken) => {
        sessionStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token,
    };
}
