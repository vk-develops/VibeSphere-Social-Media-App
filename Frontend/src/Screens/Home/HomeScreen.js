import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import PostCard from "../../Components/PostCard";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView className="bg-bgColor-light">
            <StatusBar
                backgroundColor="#fff"
                style="dark"
            />
            <View className="px-4">
                <PostCard navigation={navigation} />
                <PostCard navigation={navigation} />
                <PostCard navigation={navigation} />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
