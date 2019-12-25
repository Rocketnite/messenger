import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';

const ScreenNavigator = createStackNavigator(
  {
    HomeScreen,
    ChatScreen
  },
  { headerMode: 'none' }
);

export default createAppContainer(ScreenNavigator);