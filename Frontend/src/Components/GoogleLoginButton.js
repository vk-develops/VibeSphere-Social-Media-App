import { Button } from "react-native";
import React from "react";
import * as AuthSession from "expo-auth-session";
import { useDispatch } from "react-redux";
import { setCredentials } from "../Redux/Features/usersAuthSlice";

const GOOGLE_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;
const AUTH_URL = "http://localhost:8080";

const GoogleLoginButton = () => {
    const dispatch = useDispatch();

    return <Button title="Login with Google" />;
};

export default GoogleLoginButton;
