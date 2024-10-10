import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import { postCategories } from "../../Data/postCategories";

const CreatePostCompletionScreen = ({ route }) => {
    const { media } = route.params;

    const [selectedCategory, setSelectedCategory] = useState(null);

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

                <View>
                    <Text>Select a Category</Text>
                    <FlatList
                        data={postCategories}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => setSelectedCategory(item)}
                            >
                                <Text
                                    style={{
                                        color:
                                            selectedCategory === item
                                                ? "blue"
                                                : "black",
                                    }}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default CreatePostCompletionScreen;
