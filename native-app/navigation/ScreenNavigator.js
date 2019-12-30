import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import InfoScreen from '../screens/InfoScreen';
import SettingsScreen from '../screens/SettingsScreen';
import colors from '../constants/colors';

const ChatStackNavigator = createStackNavigator({
  HomeScreen,
  ChatScreen,
  InfoScreen
});

ChatStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return { tabBarVisible };
};

const ContactsStackNavigator = createStackNavigator({
  ContactsScreen
});

const SettingsStackNavigator = createStackNavigator({
  SettingsScreen
});

const ScreenTabNavigator = createBottomTabNavigator(
  {
    Messages: {
      screen: ChatStackNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Feather name="message-square" size={25} color={tabInfo.tintColor} />
        )
      }
    },
    Contacts: {
      screen: ContactsStackNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Feather name="users" size={25} color={tabInfo.tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsStackNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Feather name="settings" size={25} color={tabInfo.tintColor} />
        )
      }
    }
  },
  { tabBarOptions: { activeTintColor: colors.secondary } }
);

export default createAppContainer(ScreenTabNavigator);
