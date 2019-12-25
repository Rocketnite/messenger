import React from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions } from 'react-native';
import * as Animated from 'react-native-animatable';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';

import { render } from 'react-dom';
import TextChannel from '../components/TextChannel';
import SearchBar from '../components/SearchBar';
import NavigationTabs from '../components/NavigationTabs';
import dims from '../constants/dims';
import data from '../assets/dummyData';

const isBigScreen = Dimensions.get('window').height > dims.bigScreenHeight;

const HomeScreen = ({ navigation }) => {
  const renderItem = user => (
    <TextChannel navigation={navigation} user={user.item} />
  );

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
      <View style={styles.header}>
        <Text style={styles.title}> Messages </Text>
        <SearchBar />
      </View>
      <Animated.View animation="slideInUp" duration={2000}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </Animated.View>
      <NavigationTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignItems: 'center',
    padding: 5
  },

  searchContainer: {
    alignItems: 'flex-end',
    marginRight: 20
  },

  title: {
    fontSize: isBigScreen ? 64 : 32,
    fontFamily: 'rubik-bold',
    color: '#2b385a'
  }
});

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HomeScreen;
