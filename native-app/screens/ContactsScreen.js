import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

const ContactsScreen = ({ navigation }) => {
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

ContactsScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ContactsScreen;
