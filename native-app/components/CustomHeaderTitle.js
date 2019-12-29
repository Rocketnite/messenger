import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../constants/colors';

const CustomHeaderTitle = ({ avatar, isOnline, firstName, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={avatar} />
        {isOnline && <Text style={styles.statusIndicator} />}
      </View>

      <Text style={styles.name}> {firstName} </Text>
    </TouchableOpacity>
  );
};

const MULTIPLIER = 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5
  },

  avatarContainer: {
    width: 50 * MULTIPLIER,
    height: 50 * MULTIPLIER,
    marginRight: 5,
    position: 'relative'
  },
  avatar: {
    width: 50 * MULTIPLIER,
    height: 50 * MULTIPLIER,
    borderRadius: 25 * MULTIPLIER
  },
  name: {
    fontFamily: 'rubik-medium',
    fontWeight: '200',
    fontSize: 20,
    color: colors.primary,
    marginTop: 12
  },
  statusIndicator: {
    width: 15 * MULTIPLIER,
    height: 15 * MULTIPLIER,
    bottom: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: '#2ecc71',
    borderRadius: 7.5 * MULTIPLIER,
    borderWidth: 3 * MULTIPLIER,
    borderColor: '#ffffff',
    overflow: 'hidden'
  }
});

CustomHeaderTitle.propTypes = {
  avatar: PropTypes.any.isRequired,
  isOnline: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

CustomHeaderTitle.defaultProps = {
  onPress: () => console.log('you didnt pass onPress man')
};

export default CustomHeaderTitle;
