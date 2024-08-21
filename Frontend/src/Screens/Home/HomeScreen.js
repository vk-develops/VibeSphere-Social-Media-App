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
    const [visiblePostIndex, setVisiblePostIndex] = useState(null);
    const postFlatListRef = useRef(null);

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

    const renderPosts = ({ item, index }) => (
        <PostCard
            post={item}
            navigation={navigation}
            isVisible={index === visiblePostIndex}
        />
    );

    const handleViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setVisiblePostIndex(viewableItems[0]?.index);
        }
    };

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    return (
        <View className="px-4 bg-bgColor-light">
            <StatusBar
                backgroundColor="#fff"
                style="dark"
            />
            <FlatList
                ref={postFlatListRef}
                data={posts}
                keyExtractor={(item) => item._id}
                renderItem={renderPosts}
                onViewableItemsChanged={handleViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
        </View>
    );
};

export default HomeScreen;
