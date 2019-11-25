import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ChatSelection from "../components/ChatSelection";

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <View style={styles.chatList}>
                {props.data.map(user => (
                    <ChatSelection
                        key={user.id}
                        name={user.name}
                        lastMessage={user.lastMessage}
                        isOnline={user.isOnline}
                        avatar={user.avatar}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 50
    },

    chatList: {}
});

export default HomeScreen;
