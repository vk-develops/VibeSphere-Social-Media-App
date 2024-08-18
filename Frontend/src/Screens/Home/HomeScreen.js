import {
    View,
    Text,
    ScrollView,
    FlatList,
    ActivityIndicator,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import PostCard from "../../Components/PostCard";
import { useGetAllPostsQuery } from "../../Redux/Services/usersPostApiSlice";

const HomeScreen = ({ navigation }) => {
    const { data, isLoading, isError } = useGetAllPostsQuery({
        page: 1,
        limit: 10,
    });

    const posts = data?.data?.Posts;

    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (isError) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text>Error fetching posts!</Text>
            </View>
        );
    }

    const renderPosts = ({ item }) => (
        <PostCard
            post={item}
            navigation={navigation}
        />
    );
    return (
        <View className="px-4 bg-bgColor-light">
            <StatusBar
                backgroundColor="#fff"
                style="dark"
            />
            <FlatList
                data={posts}
                keyExtractor={(item) => item._id}
                renderItem={renderPosts}
            />
        </View>
    );
};

export default HomeScreen;
