import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const ChatSelection = props => {
    return (
        <View>
            <TouchableOpacity>
                <Text> {props.name} </Text>
                <Text> {props.lastMessage} </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ChatSelection;
