import { View, Button } from "react-native";
import React from "react";
import * as AuthSession from "expo-auth-session";
import { useDispatch } from "react-redux";
import { setCredentials } from "../Redux/Features/usersAuthSlice";

const GOOGLE_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;

const GoogleLoginButton = () => {
    const dispatch = useDispatch();

    const handleGoogleLogin = async () => {
        const redirectUri = AuthSession.makeRedirectUri({
            native: "VibeSphere://redirect",
        });

        const result = await AuthSession.startAsync({
            authUrl: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(
                redirectUri
            )}&response_type=code&scope=profile email`,
        });

        if (result.type === "success" && result.params.code) {
            try {
                console.log(result);
                const url = `http://localhost:8080/auth/google/callback?code=${result.params.code}`;

                const response = await fetch(url, {
                    method: "GET",
                    credentials: "include",
                });

                if (response.ok) {
                    const data = await response.json();
                    dispatch(setCredentials(data));
                } else {
                    console.error("Google login failed: ", response.status);
                }
            } catch (error) {}
        }
    };

    return (
        <View>
            <Button
                onPress={handleGoogleLogin}
                title="Login with Google"
            />
        </View>
    );
};

export default GoogleLoginButton;
