import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const TabButton = props => {
    return (
        <TouchableOpacity>
            <View>
                <Feather name={props.name} size={22} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {}
});
export default TabButton;
