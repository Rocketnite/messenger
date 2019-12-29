import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import colors from '../constants/colors';
import HeaderButton from '../components/HeaderButtonFeather';

const ChatScreen = ({ navigation }) => {
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
  let firstName = name.split(' ')[0];
  if (firstName.length > 12) firstName = `${firstName.slice(0, 9)}...`;

  return {
    headerTitle: firstName,
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
          onPress={() => console.log('Profile button')}
        />
      </HeaderButtons>
    )
  };
};

ChatScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ChatScreen;
