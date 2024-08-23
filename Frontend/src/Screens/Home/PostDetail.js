import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const PostDetail = ({ route }) => {
    const { postDetail } = route.params;

    return (
        <ScrollView className="bg-bgColor-light">
            <StatusBar
                backgroundColor="transparent"
                style="light"
            />
            <Image
                style={{
                    height: height * 0.65,
                    width,
                    resizeMode: "cover",
                    backgroundColor: "#000",
                }}
                source={{ uri: postDetail.media[0].url }}
            />
        </ScrollView>
    );
};

export default PostDetail;
