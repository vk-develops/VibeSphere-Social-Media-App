import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { Text, View } from "react-native";

export default function App() {
    const [fontsLoaded] = useFonts({
        jakartaRegular: require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
        jakartaMedium: require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
        jakartaSemiBold: require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
        jakartaBold: require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View className="flex-1 items-center justify-center bg-bgColor-light">
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}
