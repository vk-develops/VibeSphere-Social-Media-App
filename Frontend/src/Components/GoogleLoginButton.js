import { Button } from "react-native";
import React, { useEffect } from "react";
import { useAuthRequest, makeRedirectUri } from "expo-auth-session";
import { useDispatch } from "react-redux";
import { setCredentials } from "../Redux/Features/usersAuthSlice";

const GOOGLE_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;
const AUTH_URL = "http://localhost:8080";

const discovery = {
    authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
    tokenEndpoint: "https://oauth2.googleapis.com/token",
    revocationEndpoint: "https://oauth2.googleapis.com/revoke",
};

const GoogleLoginButton = () => {
    const dispatch = useDispatch();

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: GOOGLE_CLIENT_ID,
            scopes: ["profile", "email"],
            redirectUri: makeRedirectUri({
                native: "VibeSphere://redirect",
                useProxy: true,
            }),
        },
        discovery
    );

    useEffect(() => {
        const handleAuthRequest = async () => {
            if (response?.type === "success") {
                console.log("Response: ", response);

                const { id_token } = response.params;

                try {
                    const res = await fetch(
                        "http://localhost:8080/api/v1/users/auth/google/callback",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ id_token }),
                        }
                    );

                    const data = await res.json();

                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            }
        };

        handleAuthRequest();
    }, [response]);

    return (
        <Button
            title="Login with Google"
            onPress={() => promptAsync()}
        />
    );
};

export default GoogleLoginButton;
