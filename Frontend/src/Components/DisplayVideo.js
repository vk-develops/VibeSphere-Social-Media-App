import { View, Dimensions } from "react-native";
import React, { useRef } from "react";
import { Video } from "expo-av";

const width = Dimensions.get("window").width;

const DisplayVideo = ({ item }) => {
    const videoRefs = useRef([]);

    return (
        <View>
            <Video
                source={{ uri: item.url }}
                style={{
                    height: "100%",
                    width: width - 32,
                }}
                // ref={(ref) => {
                //     videoRefs.current[index] = ref;
                // }}
                rate={1.0}
                volume={1.0}
                // isMuted={false}
                resizeMode="contain"
                shouldPlay={false}
                isLooping={false}
                useNativeControls
            />
        </View>
    );
};

export default DisplayVideo;
