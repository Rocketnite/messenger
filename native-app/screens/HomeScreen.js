import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions } from 'react-native';
import * as Animated from 'react-native-animatable';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';

import { render } from 'react-dom';
import TextChannel from '../components/TextChannel';
import NavigationTabs from '../components/NavigationTabs';
import dims from '../constants/dims';
import data from '../assets/dummyData';

const isBigScreen = Dimensions.get('window').height > dims.bigScreenHeight;

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
      <NavigationTabs />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HomeScreen;
