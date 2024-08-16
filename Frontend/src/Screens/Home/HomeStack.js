import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Logo from "../../../assets/images/VibeSphere.png";
import Bookmark from "../../../assets/icons/bookmar-save.png";
import Bars from "../../../assets/icons/menu-burger.png";
import PostDetail from "./PostDetail";

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
                                style={{ fontFamily: "jakartaBold" }}
                            >
                                VibeSphere
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <View className="flex-row items-center justify-end">
                            <TouchableOpacity
                                onPress={() =>
                                    alert(
                                        "Feature under development! Thanks for understanding (only if u understand)"
                                    )
                                }
                                style={{ marginRight: 10 }}
                            >
                                <Image
                                    className="h-6 w-6"
                                    source={Bookmark}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>
                                    alert(
                                        "Feature under development! Thanks for understanding (only if u understand)"
                                    )
                                }
                                style={{ marginRight: 14 }}
                            >
                                <Image
                                    className="h-6 w-6"
                                    source={Bars}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerStyle: {
                        height: 100,
                        borderBottomColor: "#ddd",
                        borderBottomWidth: 0.5,
                    },
                    headerTitle: "",
                }}
            />
            <Stack.Screen
                name="PostDetail"
                component={PostDetail}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
