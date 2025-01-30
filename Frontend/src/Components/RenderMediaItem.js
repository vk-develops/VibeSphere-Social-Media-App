import { View, Image, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import { Video } from "expo-av";

const width = Dimensions.get("window").width;

const renderMediaItem = ({ item }) => {
    const videoRefs = useRef([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        const visibleVideo = viewableItems.find(
            (item) => item.item.mediaType === "Video"
        );
        if (visibleVideo) {
            setCurrentVideoIndex(visibleVideo.index);
        } else {
            setCurrentVideoIndex(null);
        }
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    if (item.mediaType === "Video") {
        return (
            <View>
                <Video
                    source={{ uri: item.url }}
                    style={{
                        height: "100%",
                        width: width - 32,
                    }}
                    ref={(ref) => {
                        videoRefs.current[index] = ref;
                    }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    shouldPlay={currentVideoIndex === index}
                    isLooping
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
