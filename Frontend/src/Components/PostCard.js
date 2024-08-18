import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Heart from "../../assets/icons/heart.png";
import Comment from "../../assets/icons/message-round.png";
import Share from "../../assets/icons/Send.png";
import Bookmark from "../../assets/icons/bookmar-save.png";

const width = Dimensions.get("window").width;

const formatDateCustom = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, "0"); // "27"
    const month = date.toLocaleString("en-GB", { month: "short" }); // "Aug"
    const year = date.getFullYear(); // "2024"

    const hours = date.getHours().toString().padStart(2, "0"); // "12"
    const minutes = date.getMinutes().toString().padStart(2, "0"); // "29"

    return `${day} ${month} ${year} : ${hours}:${minutes}`;
};

const PostCard = ({ post, navigation }) => {
    const user = post.user;

    const [isExpanded, setIsExpanded] = useState(false);

    const text = post.caption;

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
                            {user.name}
                        </Text>
                    </TouchableOpacity>
                    <Text
                        className="text-xs text-[#aaa] pt-1"
                        style={{ fontFamily: "jakartaSemiBold" }}
                    >
                        {formatDateCustom(post.createdAt)}
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
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("PostDetail", {
                        image: "https://cdn.pixabay.com/photo/2024/04/25/19/49/ai-generated-8720625_640.png",
                        text,
                    })
                }
            >
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
            <View className="flex-row items-center justify-between mt-1">
                <View className="flex-row items-center justify-start my-3">
                    <View className="flex-row items-center justify-start">
                        <Image
                            className="h-6 w-6"
                            source={Heart}
                        />
                        <Text
                            className="text-sm pl-1"
                            style={{ fontFamily: "jakartaMedium" }}
                        >
                            263
                        </Text>
                    </View>
                    <View className="flex-row items-center justify-start mx-4">
                        <Image
                            className="h-6 w-6"
                            source={Comment}
                        />
                        <Text
                            className="text-sm pl-1"
                            style={{ fontFamily: "jakartaMedium" }}
                        >
                            263
                        </Text>
                    </View>
                    <View>
                        <Image
                            className="h-6 w-6"
                            source={Share}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        alert(
                            "Feature under development! Thanks for understanding (only if u understand)"
                        )
                    }
                >
                    <Image
                        className="h-6 w-6"
                        source={Bookmark}
                    />
                </TouchableOpacity>
            </View>

            <View className="w-full h-[0.5px] bg-[#c8c8c8] mt-2 mb-4"></View>
        </View>
    );
};

export default PostCard;
