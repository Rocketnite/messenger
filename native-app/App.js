import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Fonts from 'expo-font';
import { useScreens } from 'react-native-screens';
import ScreenNavigator from './navigation/ScreenNavigator';

useScreens();

const fetchFonts = () => {
  return Fonts.loadAsync({
    'rubik-bold': require('./assets/fonts/Rubik-Bold.ttf'),
    'rubik-light': require('./assets/fonts/Rubik-Light.ttf'),
    'rubik-italic': require('./assets/fonts/Rubik-Italic.ttf'),
    'rubik-regular': require('./assets/fonts/Rubik-Regular.ttf'),
    'rubik-medium': require('./assets/fonts/Rubik-Medium.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <ScreenNavigator />;
}
