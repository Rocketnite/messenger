import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native-animatable";

const Template = props => {
    return (
        <View animation="slideInRight" duration={1000} style={styles.container}>
            <TouchableOpacity>
                <MaterialIcons name="search" size={28} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: 10
    },
    inputContainer: {
        marginRight: 50,
        width: "30%"
    },
    input: {}
});

export default Template;
