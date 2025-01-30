import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";

const ProfileScreen = () => {
    return (
        <ScrollView className="relative flex-1 bg-[#fafafa]">
            <View
                style={{
                    borderStyle: "solid",
                    borderRightWidth: Dimensions.get("window").width,
                    borderTopWidth: Dimensions.get("window").width / 1.5,
                    borderRightColor: "transparent",
                    borderTopColor: "#5465FF",
                }}
                className="h-0 w-0 bg-transparent "
            ></View>
        </ScrollView>
    );
};

export default ProfileScreen;
