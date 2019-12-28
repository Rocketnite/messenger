import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButtonFeather';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import colors from '../constants/colors';

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
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Search"
            iconName="search"
            onPress={() =>
              Alert.alert('Holy moly', "It's the search button", [
                { text: 'Cool', style: 'destructive' }
              ])
            }
          />
        </HeaderButtons>
      )
    }
  },
  ChatScreen: {
    screen: ChatScreen
  }
});

export default createAppContainer(ScreenNavigator);
