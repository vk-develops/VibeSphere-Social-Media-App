import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import CreatePostScreen from "./CreatePostScreen";
import CreatePostCompletionScreen from "./CreatePostCompletionScreen";

const Stack = createStackNavigator();

const PostStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="CreatePostScreen"
                component={CreatePostScreen}
            />
            <Stack.Screen
                name="CreatePostCompletionScreen"
                component={CreatePostCompletionScreen}
            />
        </Stack.Navigator>
    );
};

export default PostStack;
