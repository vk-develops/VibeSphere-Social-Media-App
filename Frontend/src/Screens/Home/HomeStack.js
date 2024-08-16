import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Logo from "../../../assets/images/BW-Logo.png";
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
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingLeft: 16,
                            }}
                        >
                            <Image
                                source={Logo}
                                style={{
                                    width: 30,
                                    height: 30,
                                    marginRight: 10,
                                }}
                            />
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                App Name
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
