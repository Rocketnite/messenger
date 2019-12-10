import React from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { bigScreenHeight } from '../constants/dims';

const isBigScreen = Dimensions.get('window').height > bigScreenHeight;

const TabButton = props => {
  return (
    <TouchableOpacity>
      <View>
        <Feather name={props.name} size={isBigScreen ? 44 : 22} />
      </View>
    </TouchableOpacity>
  );
};

export default TabButton;
