// TODO Create contacts screen
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';

const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <Text> This is contacts screen </Text>
    </View>
  );
};

ContactsScreen.navigationOptions = {
  headerTitle: 'Contacts',
  headerTitleStyle: {
    fontFamily: 'rubik-bold',
    fontWeight: '200',
    fontSize: 24
  },
  headerTintColor: colors.primary
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
