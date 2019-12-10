import React from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import dims from '../constants/dims';

const isBigScreen = Dimensions.get('window').height > dims.bigScreenHeight;

const TabButton = ({ name }) => {
  return (
    <TouchableOpacity>
      <View>
        <Feather name={name} size={isBigScreen ? 44 : 22} />
      </View>
    </TouchableOpacity>
  );
};

TabButton.propTypes = {
  name: PropTypes.string.isRequired
};

export default TabButton;
