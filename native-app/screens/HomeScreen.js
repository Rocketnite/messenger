import React from 'react';
import { FlatList } from 'react-native';
import * as Animated from 'react-native-animatable';
import PropTypes from 'prop-types';

import TextChannel from '../components/TextChannel';
import data from '../assets/dummyData';

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

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HomeScreen;
