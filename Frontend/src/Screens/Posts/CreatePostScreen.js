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

const CreatePostScreen = () => {
    const [media, setMedia] = useState([]);

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

    return (
        <ScrollView className="bg-bgColor-light">
            <View className="m-5">
                <Button
                    title="Media"
                    onPress={pickMedia}
                />
            </View>
            <View>
                {media.map((file, index) =>
                    file.type === "image" ? (
                        <Image
                            key={index}
                            source={{ uri: file.uri }}
                            style={{ width: 100, height: 100, marginRight: 10 }}
                        />
                    ) : (
                        <Video
                            key={index}
                            source={{ uri: file.uri }}
                            style={{ width: 100, height: 100, marginRight: 10 }}
                            useNativeControls
                        />
                    )
                )}
            </View>
        </ScrollView>
    );
};

export default CreatePostScreen;
