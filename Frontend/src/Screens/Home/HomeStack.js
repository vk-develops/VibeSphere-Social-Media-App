import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Logo from "../../../assets/images/VibeSphere.png";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                // options={{ headerShown: false }}
                options={{
                    headerLeft: () => (
                        <View className="flex flex-row items-center justify-start pl-4">
                            <Image
                                className="h-7 w-9"
                                source={Logo}
                            />
                            <Text
                                className="text-xl text-headerColor-light pl-2"
                                style={{ fontWeight: "bold" }}
                            >
                                VibeSphere
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => alert("Liked!")}
                            style={{ marginRight: 15 }}
                        >
                            <Ionicons
                                name="heart-outline"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        height: 80, // Adjust this value as needed
                    },
                    headerTitle: "",
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
