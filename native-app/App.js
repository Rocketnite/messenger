import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState("home");

    const context = <HomeScreen />;

    return <View style={styles.container}>{context}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
