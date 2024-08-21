import { View, Dimensions, Image } from "react-native";
import React from "react";

const width = Dimensions.get("window").width;

const DisplayImages = ({ item }) => {
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
};

export default DisplayImages;
