import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

const Avatar = ({ image, isOnline, multiplier }) => {
  const styles = {
    container: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 5
    },

    avatarContainer: {
      width: 50 * multiplier,
      height: 50 * multiplier,
      marginRight: 5,
      position: 'relative'
    },
    avatar: {
      width: 50 * multiplier,
      height: 50 * multiplier,
      borderRadius: 25 * multiplier
    },

    statusIndicator: {
      width: 15 * multiplier,
      height: 15 * multiplier,
      bottom: 0,
      right: 0,
      position: 'absolute',
      backgroundColor: '#2ecc71',
      borderRadius: 7.5 * multiplier,
      borderWidth: 3 * multiplier,
      borderColor: '#ffffff',
      overflow: 'hidden'
    }
  };

  return (
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} source={image} />
      {isOnline && <Text style={styles.statusIndicator} />}
    </View>
  );
};

Avatar.propTypes = {
  image: PropTypes.any.isRequired,
  isOnline: PropTypes.bool.isRequired,
  multiplier: PropTypes.number
};

Avatar.defaultProps = {
  multiplier: 1
};

export default Avatar;
