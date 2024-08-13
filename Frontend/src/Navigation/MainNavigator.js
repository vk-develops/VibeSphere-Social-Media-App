import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { BASE_URL, AUTH_URL } from "../Redux/constants";
import HomeStack from "../Screens/Home/HomeStack";
import OnboardingStack from "../Screens/Onboarding/OnboardingStack";

const MainNavigator = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    const checkIsLoggedIn = async () => {
        try {
            const response = await fetch(`${BASE_URL}${AUTH_URL}/isloggedin`, {
                method: "GET",
                credentials: "include",
            });

            if (response.ok) {
                const data = await response.json();
                const userInfo = data.userInfo;
                dispatch(setCredentials(userInfo));
            }
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkIsLoggedIn();
    }, [isAuthenticated]);

    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-2xl">Loading!.....</Text>
            </View>
        );
    }

    return isAuthenticated ? <HomeStack /> : <OnboardingStack />;
};

export default MainNavigator;
