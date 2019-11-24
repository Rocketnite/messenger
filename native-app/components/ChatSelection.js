import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const ChatSelection = props => {
    const statusImage = props.isOnline
        ? require("../assets/online.png")
        : require("../assets/offline.png");

    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <View style={styles.titleContainer}>
                    <Image style={styles.avatar} source={props.avatar} />
                    <Image source={statusImage} />
                    <Text style={styles.name}>{props.name}</Text>
                </View>

                <Text style={styles.lastMessage}>{props.lastMessage}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5
    },

    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 5
    },

    titleContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    name: {
        fontSize: 18,
        marginHorizontal: 3
    },

    lastMessage: {
        fontSize: 12
    }
});

export default ChatSelection;
