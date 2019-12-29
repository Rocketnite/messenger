import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import dims from '../constants/dims';
import Avatar from './Avatar';

const isBigScreen = Dimensions.get('window').height > dims.bigScreenHeight;

const TextChannel = ({ user, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ChatScreen', { user })}
    >
      <View style={styles.container}>
        <Avatar image={user.avatar} isOnline={user.isOnline} />
        <View style={styles.description}>
          <View style={styles.upperContainer}>
            <View style={styles.nameContainer}>
              <Text numberOfLines={1} style={styles.name}>
                {user.name}
              </Text>
            </View>
            <View style={styles.whenLastMessageContainer}>
              <Text style={styles.whenLastMessage}>{user.whenLastMessage}</Text>
            </View>
          </View>
          <View style={styles.lastMessageContainer}>
            <Text numberOfLines={2} style={styles.lastMessage}>
              {user.lastMessage}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  description: {
    width: '80%',
    marginLeft: isBigScreen ? 20 : 10
  },
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    width: '100%'
  },

  nameContainer: {
    width: '80%'
  },

  lastMessageContainer: {
    alignItems: 'flex-start'
  },

  name: {
    fontSize: isBigScreen ? 36 : 18,
    fontFamily: 'rubik-regular'
  },

  lastMessage: {
    fontSize: isBigScreen ? 24 : 12,
    marginLeft: 1,
    fontFamily: 'rubik-regular',
    color: '#505050',
    textAlign: 'auto',
    width: '85%'
  },

  whenLastMessage: {
    fontSize: isBigScreen ? 24 : 12,
    fontFamily: 'rubik-regular',
    marginTop: 3,
    color: '#505050'
  },

  whenLastMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexGrow: 1,
    paddingHorizontal: 10
  }
});

TextChannel.propTypes = {
  user: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default TextChannel;
