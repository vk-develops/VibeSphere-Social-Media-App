import { View, Text, ScrollView } from "react-native";
import React from "react";

const CreatePostCompletionScreen = ({ route }) => {
    // const { media } = route.params;

    // console.log(media);

    return (
        <ScrollView className="flex-1 bg-bgColor-light">
            <View className="flex-0.2">
                <Text
                    style={{ fontFamily: "jakartaBold" }}
                    className="text-3xl text-headerColor-light mt-4"
                >
                    Create Post
                </Text>
                <Text
                    style={{ fontFamily: "jakartaMedium" }}
                    className="text-base pt-2 text-paraColor-light"
                >
                    Share your vibe to your friends, followers and to people
                    across the world!{" "}
                </Text>
            </View>
        </ScrollView>
    );
};

export default CreatePostCompletionScreen;
