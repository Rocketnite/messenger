import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ChatSelection from "../components/ChatSelection";

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.chatList}>
                {props.data.map(user => (
                    <ChatSelection
                        key={user.id}
                        name={user.name}
                        lastMessage={user.lastMessage}
                        isOnline={user.isOnline}
                        avatar={user.avatar}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 40
    },

    chatList: {}
});

export default HomeScreen;
