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
                        {statusImage && (
                            <Image
                                style={styles.statusImage}
                                source={statusImage}
                            />
                        )}
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
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },

    description: {
        width: "80%",
        marginLeft: 7,
        justifyContent: "space-around"
    },

    nameContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    lastMessageContainer: {
        marginLeft: 5,
        alignItems: "flex-start"
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5
    },

    statusImage: {
        marginLeft: 3
    },

    name: {
        fontSize: 18,
        marginLeft: 5
    },

    lastMessage: {
        fontSize: 12,
        color: "#505050"
    }
});

export default ChatSelection;
