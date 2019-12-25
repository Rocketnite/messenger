import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native-animatable';
import dims from '../constants/dims';

const isBigScreen = Dimensions.get('window').height > dims.bigScreenHeight;

const SearchBar = () => {
  const iconSize = isBigScreen ? 44 : 22;
  return (
    <View animation="slideInRight" duration={1000}>
      <TouchableOpacity>
        <Feather name="search" size={iconSize} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
