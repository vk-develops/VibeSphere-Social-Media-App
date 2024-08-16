import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const width = Dimensions.get("window").width;

const PostDetail = ({ route }) => {
    const { image, text } = route.params;

    return (
        <View>
            <StatusBar
                backgroundColor="transparent"
                style="light"
            />
            <Image
                style={{ height: width, width }}
                source={{ uri: image }}
            />
        </View>
    );
};

export default PostDetail;
