import React from 'react';
import { View, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import * as Animated from 'react-native-animatable';
import PropTypes from 'prop-types';
import TextChannel from '../components/TextChannel';
import SearchBar from '../components/SearchBar';
import NavigationTabs from '../components/NavigationTabs';
import dims from '../constants/dims';

const isBigScreen = Dimensions.get('window').height > dims.bigScreenHeight;

const HomeScreen = ({ data }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />
        <Text style={styles.title}> Messages </Text>
        <Animated.View animation="slideInUp" duration={1000}>
          {data.map(user => (
            <TextChannel key={user.id} user={user} />
          ))}
        </Animated.View>
      </ScrollView>
      <NavigationTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  },

  searchContainer: {
    alignItems: 'flex-end',
    marginRight: 20
  },

  title: {
    fontSize: isBigScreen ? 64 : 32,
    marginHorizontal: 11,
    marginBottom: 11,
    fontFamily: 'rubik-bold',
    color: '#2b385a'
  }
});

HomeScreen.propTypes = {
  data: PropTypes.array.isRequired
};

export default HomeScreen;
