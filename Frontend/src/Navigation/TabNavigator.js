import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../Screens/Home/HomeStack";
import ProfileStack from "../Screens/Profile/ProfileStack";
import CreatePostScreen from "../Screens/Posts/CreatePostScreen";
import PostStack from "../Screens/Posts/PostStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
            />
            <Tab.Screen
                name="PostTab"
                component={PostStack}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
