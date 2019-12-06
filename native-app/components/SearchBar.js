import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native-animatable";

const SearchBar = props => {
  return (
    <View animation="slideInRight" duration={1000} style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={22} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20
  }
});

export default SearchBar;
