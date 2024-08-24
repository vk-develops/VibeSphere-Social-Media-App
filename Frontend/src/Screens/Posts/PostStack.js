import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreatePostScreen from "./CreatePostScreen";

const Stack = createStackNavigator();

const PostStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CreatePostScreen"
                component={CreatePostScreen}
            />
        </Stack.Navigator>
    );
};

export default PostStack;
