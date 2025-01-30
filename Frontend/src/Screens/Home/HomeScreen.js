import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import PostCard from "../../Components/PostCard";
import { useGetAllPostsQuery } from "../../Redux/Services/usersPostApiSlice";

const HomeScreen = ({ navigation }) => {
    const { data, isLoading, isError } = useGetAllPostsQuery({
        page: 1,
        limit: 10,
    });

    const posts = data?.data?.Posts;
    const [viewableItems, setViewableItems] = useState([]);

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        setViewableItems(viewableItems.map(({ item }) => item._id));
    });

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
            isVisible={viewableItems.includes(item._id)}
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
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig}
            />
        </View>
    );
};

export default HomeScreen;
