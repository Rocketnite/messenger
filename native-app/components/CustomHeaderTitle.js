import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../constants/colors';
import Avatar from './Avatar';

const CustomHeaderTitle = ({ avatar, isOnline, firstName, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar image={avatar} isOnline={isOnline} multiplier={0.9} />
      <Text style={styles.name}> {firstName} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5
  },

  name: {
    fontFamily: 'rubik-medium',
    fontWeight: '200',
    fontSize: 20,
    color: colors.primary,
    marginTop: 12
  }
});

CustomHeaderTitle.propTypes = {
  avatar: PropTypes.any.isRequired,
  isOnline: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

CustomHeaderTitle.defaultProps = {
  onPress: () => console.log('CustomHeaderTitle has no onPress prop')
};

export default CustomHeaderTitle;
