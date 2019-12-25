import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> This is chat view version pre-alpha </Text>
      <Button title="Back to home screen" onPress={() => navigation.goBack()} />
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
  navigation: PropTypes.object.isRequired
};

export default ChatScreen;
