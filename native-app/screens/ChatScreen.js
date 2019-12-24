import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text> This is chat view version pre-alpha </Text>
      <Button title="Back to home screen" />
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

ChatScreen.propTypes = {};

export default ChatScreen;
