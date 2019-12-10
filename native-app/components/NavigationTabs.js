import React from 'react';
import { View, StyleSheet, Platform, Dimensions } from 'react-native';
import TabButton from './TabButton';
import dims from '../constants/dims';

const isBigScreen = Dimensions.get('window').height > dims.bigScreenHeight;

const NavigationTabs = () => {
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: isBigScreen ? 100 : 50,
    padding: isBigScreen ? 10 : 5,
    marginBottom: Platform.OS === 'ios' ? 10 : 0
  }
});

export default NavigationTabs;
