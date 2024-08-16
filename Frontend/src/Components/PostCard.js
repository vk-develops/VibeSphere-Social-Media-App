import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const width = Dimensions.get("window").width;

const PostCard = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const text =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const truncatedText = isExpanded ? text : `${text.slice(0, 70)}...`;

    const toggleTruncate = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <View className="mt-6">
            <View className="flex items-start justify-start flex-row">
                <TouchableOpacity
                    activeOpacity={0.7}
                    className="bg-black h-11 w-11 flex items-center justify-center rounded-full overflow-hidden"
                >
                    <Image
                        style={{
                            height: "100%",
                            width: "100%",
                            resizeMode: "contain",
                        }}
                        source={{
                            uri: "https://i.pinimg.com/236x/34/93/6a/34936a4c4b8c944126b31c6d145f6959.jpg",
                        }}
                    />
                </TouchableOpacity>
                <View className="pl-2 -mt-1">
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text
                            className="text-base text-headerColor-light"
                            style={{ fontFamily: "jakartaBold" }}
                        >
                            Akshaya Shree
                        </Text>
                    </TouchableOpacity>
                    <Text
                        className="text-xs text-[#aaa] pt-1"
                        style={{ fontFamily: "jakartaSemiBold" }}
                    >
                        27 Aug 2024 : 17:29
                    </Text>
                </View>
            </View>
            <View className="my-3">
                <Text
                    className="text-base text-paraColor-light"
                    style={{
                        fontFamily: "jakartaMedium",
                        // lineHeight: "23%",
                    }}
                >
                    {truncatedText}
                    <TouchableOpacity onPress={toggleTruncate}>
                        <Text
                            className="text-base text-headerColor-light -mb-1"
                            style={{
                                fontFamily: "jakartaSemiBold",
                                // lineHeight: "23%",
                            }}
                        >
                            {isExpanded ? "...Read Less" : "Read More"}
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <TouchableOpacity>
                <View
                    className="rounded-3xl overflow-hidden mt-3"
                    style={{ height: width - 16 }}
                >
                    <Image
                        style={{
                            height: "100%",
                            width: "100%",
                            resizeMode: "cover",
                        }}
                        source={{
                            uri: "https://cdn.pixabay.com/photo/2024/04/25/19/49/ai-generated-8720625_640.png",
                        }}
                    />
                </View>
            </TouchableOpacity>
            <View className="w-full h-[0.5px] bg-[#c8c8c8] mt-6 mb-4"></View>
        </View>
    );
};

export default PostCard;
