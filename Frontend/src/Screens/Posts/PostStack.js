import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreatePostScreen from "./CreatePostScreen";
import CreatePostCompletionScreen from "./CreatePostCompletionScreen";

const Stack = createStackNavigator();

const PostStack = () => {
    return (
        <Stack.Navigator>
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
