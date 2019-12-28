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

  return {
    headerTitle: name,
    headerTitleStyle: {
      fontFamily: 'rubik-bold',
      fontWeight: '200',
      fontSize: 24
    },
    headerTintColor: colors.primary,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Call"
          iconName="phone"
          onPress={() => console.log('Call button')}
        />
        <Item
          title="Calendar"
          iconName="calendar"
          onPress={() => console.log('Events button')}
        />
        <Item
          title="Profile"
          iconName="user"
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
