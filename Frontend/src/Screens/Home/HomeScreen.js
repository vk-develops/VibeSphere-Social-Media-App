import { View, Text, ScrollView } from "react-native";
import React from "react";
import PostCard from "../../Components/PostCard";

const HomeScreen = () => {
    return (
        <ScrollView className="bg-bgColor-light">
            <View className="px-4">
                <PostCard />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
