import { View, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import { Video } from "expo-av";

const width = Dimensions.get("window").width;

const DisplayVideo = ({ item, index, isPlaying }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        console.log(`Video ${index} isPlaying: ${isPlaying}`);
        if (isPlaying) {
            videoRef.current?.playAsync();
        } else {
            videoRef.current?.pauseAsync();
        }
    }, [isPlaying]);

    return (
        <View>
            <Video
                source={{
                    uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                style={{
                    height: "100%",
                    width: width - 32,
                }}
                ref={videoRef}
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
