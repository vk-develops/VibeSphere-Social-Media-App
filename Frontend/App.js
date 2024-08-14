import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingStack from "./src/Screens/Onboarding/OnboardingStack";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
import MainNavigator from "./src/Navigation/MainNavigator";

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
        <View className="flex-1">
            <Provider store={store}>
                <StatusBar style="auto" />
                <NavigationContainer>
                    <MainNavigator />
                </NavigationContainer>
            </Provider>
        </View>
    );
}
