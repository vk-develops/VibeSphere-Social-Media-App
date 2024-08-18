import { View, Image, Dimensions } from "react-native";
import React from "react";
import { Video } from "expo-av";

const width = Dimensions.get("window").width;

const renderMediaItem = ({ item }) => {
    if (item.mediaType === "Video") {
        return (
            <View>
                <Video
                    source={{ uri: item.url }}
                    style={{
                        height: "100%",
                        width: width - 32,
                    }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={true}
                    resizeMode="contain"
                    shouldPlay={false}
                />
            </View>
        );
    } else {
        return (
            <View>
                <Image
                    style={{
                        height: "100%",
                        width: width - 32,
                        resizeMode: "cover",
                    }}
                    source={{ uri: item.url }}
                    onError={() => console.log("Image failed to load")}
                />
            </View>
        );
    }
};

export default renderMediaItem;
