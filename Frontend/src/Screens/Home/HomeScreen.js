import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import PostCard from "../../Components/PostCard";

const HomeScreen = () => {
    return (
        <ScrollView className="bg-bgColor-light">
            <StatusBar
                backgroundColor="#fff"
                style="dark"
            />
            <View className="px-4">
                <PostCard />
                <PostCard />
                <PostCard />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
