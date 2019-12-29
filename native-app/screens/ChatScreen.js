import React from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import colors from '../constants/colors';
import HeaderButton from '../components/HeaderButtonFeather';
import CustomHeaderTitle from '../components/CustomHeaderTitle';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text> This is chat screen </Text>
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
  const { name, avatar, isOnline } = navigationData.navigation.getParam('user');
  let firstName = name.split(' ')[0];
  if (firstName.length > 12) firstName = `${firstName.slice(0, 9)}...`;

  return {
    headerTitle:
      Platform.OS === 'android' ? (
        <CustomHeaderTitle
          firstName={firstName}
          avatar={avatar}
          isOnline={isOnline}
          onPress={() => navigationData.navigation.navigate('InfoScreen')}
        />
      ) : (
        { firstName }
      ),
    headerTitleStyle: {
      fontFamily: 'rubik-bold',
      fontWeight: '200',
      fontSize: 22
    },
    headerBackTitle: '',
    headerTintColor: colors.primary,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Call"
          iconName="phone"
          onPress={() => console.log('Call button')}
        />
        <Item
          title="Info"
          iconName="info"
          onPress={() => navigationData.navigation.navigate('InfoScreen')}
        />
      </HeaderButtons>
    )
  };
};

export default ChatScreen;
