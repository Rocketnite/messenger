import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import dummyData from "./assets/dummyData";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState("home");
    const [data, setData] = useState(dummyData);

    const context = <HomeScreen data={data} />;

    return <View style={styles.container}>{context}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
