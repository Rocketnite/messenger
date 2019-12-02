import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import * as Fonts from "expo-font";

import HomeScreen from "./screens/HomeScreen";
import dummyData from "./assets/dummyData";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState("home");
    const [data, setData] = useState(dummyData);
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        console.log("Ready");
        return (
            <AppLoading
                startAsync={() => {
                    return Fonts.loadAsync({
                        "rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"),
                        "rubik-light": require("./assets/fonts/Rubik-Light.ttf"),
                        "rubik-italic": require("./assets/fonts/Rubik-Italic.ttf"),
                        "rubik-regular": require("./assets/fonts/Rubik-Regular.ttf"),
                        "rubik-medium": require("./assets/fonts/Rubik-Medium.ttf")
                    });
                }}
                onFinish={() => setIsReady(true)}
                onError={err => console.log(err)}
            />
        );
    }

    const context = <HomeScreen data={data} />;

    return <View style={styles.container}>{context}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
