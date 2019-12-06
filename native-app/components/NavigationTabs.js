import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import TabButton from "./TabButton";

const NavigationTabs = props => {
  return (
    <View style={styles.container}>
      <TabButton name="message-square" />
      <TabButton name="user" />
      <TabButton name="settings" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
    padding: 5,
    marginBottom: Platform.OS === "ios" ? 10 : 0
  }
});

export default NavigationTabs;
