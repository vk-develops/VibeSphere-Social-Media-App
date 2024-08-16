import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../Screens/Home/HomeStack";
import ProfileStack from "../Screens/Profile/ProfileStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
