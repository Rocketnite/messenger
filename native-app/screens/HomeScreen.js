import React from 'react';
import { FlatList, Alert } from 'react-native';
import * as Animated from 'react-native-animatable';
import PropTypes from 'prop-types';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import TextChannel from '../components/TextChannel';
import data from '../assets/dummyData';
import colors from '../constants/colors';
import HeaderButton from '../components/HeaderButtonFeather';

const HomeScreen = ({ navigation }) => {
  const renderItem = user => (
    <TextChannel navigation={navigation} user={user.item} />
  );

  return (
    <Animated.View animation="slideInUp" duration={2000}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Animated.View>
  );
};

HomeScreen.navigationOptions = {
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
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HomeScreen;
