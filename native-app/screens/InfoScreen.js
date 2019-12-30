// TODO Create info screen
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text> This is info screen </Text>
    </View>
  );
};

InfoScreen.navigationOptions = {
  headerTitle: 'Info',
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

export default InfoScreen;
