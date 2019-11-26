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
        flex: 1,
        marginTop: 30
    },

    chatList: {}
});

export default HomeScreen;
