import React from 'react';
import { Text, View, StyleSheet, BackHandler } from 'react-native';
import PropTypes from 'prop-types';

const ChatScreen = ({ handleOpenHomeScreen }) => {
  return (
    <View style={styles.container}>
      <Text> This is chat view version pre-alpha </Text>
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

ChatScreen.propTypes = {
  handleOpenHomeScreen: PropTypes.func.isRequired
};

export default ChatScreen;
