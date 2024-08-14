import { View, Text } from "react-native";
import React from "react";
import GoogleLoginButton from "../../Components/GoogleLoginButton";

const LoginScreen = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="mt-7">LoginScreen</Text>
            <GoogleLoginButton />
        </View>
    );
};

export default LoginScreen;
