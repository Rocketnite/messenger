import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

const ChatScreen = ({ navigation }) => {
  const user = navigation.getParam('user');

  return (
    <View style={styles.container}>
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

ChatScreen.navigationOptions = navigationData => {
  const { name } = navigationData.navigation.getParam('user');

  return {
    headerTitle: name,
    headerTitleStyle: {
      fontFamily: 'rubik-bold',
      fontWeight: '200',
      fontSize: 24
    },
    headerTintColor: colors.primary
  };
};

ChatScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ChatScreen;
