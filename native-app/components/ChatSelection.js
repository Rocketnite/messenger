import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const ChatSelection = props => {
    const statusImage = props.isOnline && require("../assets/online.png");

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image style={styles.avatar} source={props.avatar} />
                <View style={styles.description}>
                    <View style={styles.nameContainer}>
                        {statusImage && <Image source={statusImage} />}
                        <Text numberOfLines={1} style={styles.name}>
                            {props.name}
                        </Text>
                    </View>
                    <View style={styles.lastMessageContainer}>
                        <Text numberOfLines={2} style={styles.lastMessage}>
                            {props.lastMessage}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        width: 200,
        flexDirection: "row"
    },

    description: {
        marginHorizontal: 5
    },

    nameContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    lastMessageContainer: {
        alignItems: "flex-start",
        width: 150
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5
    },

    name: {
        fontSize: 18,
        marginHorizontal: 3
    },

    lastMessage: {
        fontSize: 12,
        color: "#505050"
    }
});

export default ChatSelection;
