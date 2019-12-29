import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import colors from '../constants/colors';

const ScreenStackNavigator = createStackNavigator({
  HomeScreen,
  ChatScreen
});

ScreenStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return { tabBarVisible };
};

const ScreenTabNavigator = createBottomTabNavigator(
  {
    Messages: {
      screen: ScreenStackNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Feather name="message-square" size={25} color={tabInfo.tintColor} />
        )
      }
    },
    Contacts: {
      screen: ContactsScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Feather name="users" size={25} color={tabInfo.tintColor} />
        )
      }
    }
  },
  { tabBarOptions: { activeTintColor: colors.secondary } }
);

export default createAppContainer(ScreenTabNavigator);
