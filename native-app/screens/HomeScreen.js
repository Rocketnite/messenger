import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ChatSelection from "../components/ChatSelection";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.chatList}>
                <View style={styles.searchContainer}>
                    <MaterialIcons name="search" size={28} />
                </View>
                <Text style={styles.title}> Messages </Text>
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

    searchContainer: {
        alignItems: "flex-end",
        marginRight: 20
    },

    title: {
        fontSize: 32,
        marginHorizontal: 11,
        marginBottom: 11,
        fontWeight: "500",
        color: "#2b385a"
    },

    chatList: {}
});

export default HomeScreen;
