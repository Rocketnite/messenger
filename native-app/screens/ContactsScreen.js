// TODO Create contacts screen
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <Text> This is contacts screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  }
});

export default ContactsScreen;
