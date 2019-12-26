import React from 'react';
import { createAppContainer } from 'react-navigation';
import { TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import colors from '../constants/colors';

const SearchButton = () => (
  <TouchableOpacity
    style={{ marginRight: 15 }}
    onPress={() =>
      Alert.alert('Holy moly', "It's the search button", [
        { text: 'Cool', style: 'cancel' }
      ])
    }
  >
    <Feather name="search" size={22} />
  </TouchableOpacity>
);

const ScreenNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Messages',
      headerTitleStyle: {
        fontFamily: 'rubik-bold',
        fontWeight: '200',
        fontSize: 24
      },
      headerTintColor: colors.primary,
      headerRight: <SearchButton />
    }
  },
  ChatScreen: {
    screen: ChatScreen
  }
});

export default createAppContainer(ScreenNavigator);
