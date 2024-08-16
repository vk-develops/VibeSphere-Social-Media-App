import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Logo from "../../../assets/images/BW-Logo.png";
import Gl from "../../../assets/images/Google-Logo.png";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../Redux/Services/usersAuthApiSlice";
import { setCredentials } from "../../Redux/Features/usersAuthSlice";
import AuthenticateLoader from "../../Components/AuthenticateLoader";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const submitHandler = async () => {
        try {
            const response = await login({ email, password }).unwrap();

            if (response.success) {
                const userInfo = response.userInfo;
                dispatch(setCredentials(userInfo));
                // useSuccessToast({ msg: response.message });
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    if (isLoading) {
        return <AuthenticateLoader />;
    }

    return (
        <SafeAreaView>
            <StatusBar
                backgroundColor="#5465ff"
                animated={true}
                style="dark"
            />
            <ScrollView className=" bg-purple--500">
                <View className="flex items-center  justify-center py-10">
                    <Image
                        source={Logo}
                        className="h-[100px]"
                        style={{ resizeMode: "contain" }}
                    />
                </View>
                <View className="p-5 flex-1 bg-bgColor-light rounded-t-[30px]">
                    <View className="pt-2">
                        <Text
                            className="text-3xl text-headerColor-light"
                            style={{ fontFamily: "jakartaBold" }}
                        >
                            Login{" "}
                        </Text>
                        <Text
                            className="text-base text-paraColor-light pt-3"
                            style={{ fontFamily: "jakartaMedium" }}
                        >
                            Sign in with your registered account to continue
                            using our app.
                        </Text>
                    </View>
                    <View className="mt-8">
                        <View>
                            <Text
                                className="text-sm uppercase text-[#555] pb-3"
                                style={{
                                    fontFamily: "jakartaSemiBold",
                                    letterSpacing: 2,
                                }}
                            >
                                Email:
                            </Text>
                            <TextInput
                                className="bg-[#f3f3f5] py-3 pl-5 rounded-full border-[#ccc] border"
                                placeholder="Enter your name"
                                placeholderTextColor={"#aaa"}
                                style={{ fontFamily: "jakartaMedium" }}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>
                        <View className="mt-5">
                            <Text
                                className="text-sm uppercase text-[#555] pb-3"
                                style={{
                                    fontFamily: "jakartaSemiBold",
                                    letterSpacing: 2,
                                }}
                            >
                                Password:
                            </Text>
                            <TextInput
                                className="bg-[#f3f3f5] py-3 pl-5 rounded-full border-[#ccc] border"
                                placeholder="Enter your name"
                                placeholderTextColor={"#aaa"}
                                style={{ fontFamily: "jakartaMedium" }}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={submitHandler}
                            className="bg-purple--500 flex items-center justify-center py-[14px] rounded-full mt-10"
                        >
                            <Text
                                className="text-white text-xl"
                                style={{ fontFamily: "jakartaSemiBold" }}
                            >
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex items-center justify-center flex-row gap-3 mt-5">
                        <View className="w-24 h-[2px] bg-[#ccc] rounded-full"></View>
                        <Text
                            className="text-sm text-[#555]"
                            style={{ fontFamily: "jakartaMedium" }}
                        >
                            Or{" "}
                        </Text>
                        <View className="w-24 h-[2px] bg-[#ccc] rounded-full"></View>
                    </View>
                    <View className="pb-5">
                        <TouchableOpacity
                            activeOpacity={0.8}
                            className="bg-[#f3f3f5] border-[#ccc] border flex items-center justify-center py-[14px] rounded-full mt-6"
                        >
                            <View className="flex items-center justify-center flex-row gap-5">
                                <Image
                                    style={{
                                        height: 20,
                                        width: 20,
                                        resizeMode: "contain",
                                    }}
                                    source={Gl}
                                />
                                <Text
                                    className="text-[#555] text-base capitalize"
                                    style={{ fontFamily: "jakartaMedium" }}
                                >
                                    Login with google
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View className="flex items-center justify-center flex-row gap-2 my-2">
                        <Text
                            style={{ fontFamily: "jakartaMedium" }}
                            className="text-base text-paraColor-light"
                        >
                            Don't have an account ?
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() =>
                                navigation.navigate("RegisterScreen")
                            }
                        >
                            <Text
                                style={{ fontFamily: "jakartaBold" }}
                                className="text-base text-purple-800 underline"
                            >
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
