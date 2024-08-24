import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const CreatePostCompletionScreen = ({ route }) => {
    const { media } = route.params;

    const [tags, setTags] = useState("");
    const [tagsArray, setTagsArray] = useState([]);

    const handleTagChange = (text) => {
        setTags(text);

        const newTags = text
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag !== "");

        setTagsArray(newTags);
    };

    // const uploadMedia = async () => {
    //     const formData = new FormData();

    //     media.forEach((file, index) => {
    //         formData.append('media', {
    //             uri: file.uri,
    //             name: file.uri.split('/').pop(),
    //             type: file.type + '/' + file.uri.split('.').pop(),
    //         });
    //     });

    //     try {
    //         const response = await axios.post(
    //             'http://your-backend-url/api/v1/users/posts/upload-media',
    //             formData,
    //             {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data',
    //                 },
    //             }
    //         );
    //         console.log(response.data);
    //         Alert.alert('Success', 'Media uploaded successfully!');
    //     } catch (error) {
    //         console.error(error);
    //         Alert.alert('Error', 'There was an error uploading the media.');
    //     }
    // };

    return (
        <ScrollView className="flex-1 bg-bgColor-light p-4">
            <View className="flex-0.2">
                <Text
                    style={{ fontFamily: "jakartaBold" }}
                    className="text-3xl text-headerColor-light mt-4"
                >
                    Create Post
                </Text>
                <Text
                    style={{ fontFamily: "jakartaMedium" }}
                    className="text-base pt-2 text-paraColor-light"
                >
                    Share your vibe to your friends, followers and to people
                    across the world!{" "}
                </Text>
            </View>
            <View>
                <View className="mt-8">
                    <Text
                        className="text-xs uppercase text-headerColor-light pb-[8px]"
                        style={{
                            letterSpacing: 3,
                            fontFamily: "jakartaSemiBold",
                        }}
                    >
                        Title:
                    </Text>
                    <TextInput
                        className="border-[1.5px] border-[#888] pt-1 pl-5 py-2 rounded-lg text-base text-[#888]"
                        placeholder="Add a title"
                        style={{ fontFamily: "jakartaMedium" }}
                    />
                </View>
                <View className="mt-8">
                    <Text
                        className="text-xs uppercase text-headerColor-light pb-[8px]"
                        style={{
                            letterSpacing: 3,
                            fontFamily: "jakartaSemiBold",
                        }}
                    >
                        Caption:
                    </Text>
                    <TextInput
                        className="border-[1.5px] border-[#888] pt-3 pb-40 pl-5 rounded-lg text-base text-[#888]"
                        placeholder="Add a caption"
                        style={{ fontFamily: "jakartaMedium" }}
                    />
                </View>

                <View className="mt-8 flex items-center justify-start flex-row flex-wrap">
                    {tagsArray.map((tag, index) => (
                        <View
                            key={index}
                            className="bg-purple--100 flex-row items-center rounded-full px-8 py-2 m-1"
                        >
                            <Text
                                className=" text-headerColor-light"
                                style={{ fontFamily: "jakartaMedium" }}
                            >
                                {tag}
                            </Text>
                        </View>
                    ))}
                </View>

                <View className="mt-3">
                    <Text
                        className="text-xs uppercase text-headerColor-light pb-[8px]"
                        style={{
                            letterSpacing: 3,
                            fontFamily: "jakartaSemiBold",
                        }}
                    >
                        Tags:
                    </Text>
                    <TextInput
                        className="border-[1.5px] border-[#888] pt-1 pl-5 py-2 rounded-lg text-base text-[#888]"
                        placeholder="Add tags seperated by commas"
                        style={{ fontFamily: "jakartaMedium" }}
                        value={tags}
                        onChangeText={handleTagChange}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default CreatePostCompletionScreen;
