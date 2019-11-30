import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import TextChannel from "../components/TextChannel";
import SearchBar from "../components/SearchBar";
import * as Animated from "react-native-animatable";

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.chatList}>
                <SearchBar />
                <Text style={styles.title}> Messages </Text>
                <Animated.View animation="slideInUp" duration={1000}>
                    {props.data.map(user => (
                        <TextChannel
                            key={user.id}
                            name={user.name}
                            lastMessage={user.lastMessage}
                            isOnline={user.isOnline}
                            avatar={user.avatar}
                        />
                    ))}
                </Animated.View>
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
