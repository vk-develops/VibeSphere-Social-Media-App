import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Button,
    Image,
    Alert,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import { AntDesign, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const CreatePostScreen = () => {
    const [media, setMedia] = useState([]);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);

    const pickMedia = async () => {
        if (media.length >= 5) {
            Alert.alert(
                "Limit Exceeded",
                "You can only upload up to 5 media files."
            );
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsMultipleSelection: true,
            quality: 1,
            // allowsEditing: true,
        });

        if (!result.canceled) {
            const selectedFiles = result.assets.slice(0, 5 - media.length);
            setMedia([...media, ...selectedFiles]);
        }
    };

    const requestCameraPermission = async () => {
        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === "granted");

        if (cameraStatus.status !== "granted") {
            Alert.alert(
                "Permission Denied",
                "You need to allow camera access to take pictures."
            );
        }
    };

    const takePicture = async () => {
        if (hasCameraPermission === null) {
            await requestCameraPermission();
        }

        if (media.length >= 5) {
            Alert.alert(
                "Limit Exceeded",
                "You can only upload up to 5 media files."
            );
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.canceled) {
            setMedia([...media, result.assets[0]]);
        }
    };

    return (
        <View className="bg-bgColor-light flex-1 p-4">
            <StatusBar
                backgroundColor="#fafafa"
                style="dark"
            />
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
            <ScrollView
                className="flex-0.5 mt-20"
                horizontal
                style={{ marginVertical: 10 }}
            >
                {media.map((file, index) =>
                    file.type === "image" ? (
                        <Image
                            key={index}
                            source={{ uri: file.uri }}
                            style={{ width: 150, height: 150, marginRight: 10 }}
                        />
                    ) : (
                        <Video
                            key={index}
                            source={{ uri: file.uri }}
                            style={{ width: 150, height: 150, marginRight: 10 }}
                            useNativeControls
                        />
                    )
                )}
            </ScrollView>
            <View className="flex-0.3">
                <View className="flex flex-row items-center justify-between space-x-4 mb-4">
                    <TouchableOpacity
                        onPress={pickMedia}
                        className="border-[1.5px] border-paraColor-light flex-1 items-center justify-center rounded-lg"
                    >
                        <View className="flex items-center justify-center gap-3 flex-row py-[14px]">
                            <Feather
                                name="image"
                                size={20}
                                color="#5e5e5e"
                            />
                            <Text
                                className="text-paraColor-light text-base pb-1"
                                style={{ fontFamily: "jakartaSemiBold" }}
                            >
                                Add Media
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={takePicture}
                        className="border-[1.5px] border-paraColor-light flex-1 items-center justify-center rounded-lg"
                    >
                        <View className="flex items-center justify-center gap-3 flex-row py-[14px]">
                            <Feather
                                name="camera"
                                size={20}
                                color="#5e5e5e"
                            />

                            <Text
                                className="text-paraColor-light text-base"
                                style={{ fontFamily: "jakartaSemiBold" }}
                            >
                                Open Camera
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    activeOpacity={media.length > 0 ? 0.8 : 1}
                    className={`bg-slate-300 flex items-center justify-center rounded-2xl  ${
                        media.length > 0 && "bg-purple--500"
                    }`}
                >
                    <View className="flex items-center justify-center gap-3 flex-row py-[14px]">
                        <Text
                            className="text-white text-xl"
                            style={{ fontFamily: "jakartaSemiBold" }}
                        >
                            Continue
                        </Text>
                        <AntDesign
                            name="arrowright"
                            size={24}
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CreatePostScreen;
