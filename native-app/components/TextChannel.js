import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const TextChannel = props => {
    const statusImage = props.isOnline && require("../assets/online.png");

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={props.avatar} />
                    {statusImage && (
                        <Image
                            style={styles.statusImage}
                            source={statusImage}
                        />
                    )}
                </View>
                <View style={styles.description}>
                    <View style={styles.nameContainer}>
                        <Text numberOfLines={1} style={styles.name}>
                            {props.name}
                        </Text>
                        <View style={styles.whenLastMessageContainer}>
                            <Text style={styles.whenLastMessage}>
                                {props.whenLastMessage}
                            </Text>
                        </View>
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
        marginLeft: 10
    },

    nameContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        width: "100%"
    },

    lastMessageContainer: {
        alignItems: "flex-start"
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },

    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5,
        position: "relative"
    },

    statusImage: {
        width: 15,
        height: 15,
        marginLeft: 35,
        marginTop: 35,
        position: "absolute"
    },

    name: {
        fontSize: 18,
        fontFamily: "rubik-regular"
    },

    lastMessage: {
        fontSize: 12,
        marginLeft: 1,
        fontFamily: "rubik-regular",
        color: "#505050",
        textAlign: "auto",
        width: "85%"
    },

    whenLastMessage: {
        fontSize: 12,
        fontFamily: "rubik-regular",
        marginTop: 3,
        color: "#505050"
    },

    whenLastMessageContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        flexGrow: 1
    }
});

export default TextChannel;
